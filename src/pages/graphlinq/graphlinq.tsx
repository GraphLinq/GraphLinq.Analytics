import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_SELECTED_GLQ, POST_HISTORY_GLQ, POST_GLQ_TRADES } from '../../store/actionNames/glqAction';
import { RootState } from '../../store/reducers';
import { formatCur, formatSupply, deltaDirection } from '../../utils';
import Moment from 'react-moment';
import moment from 'moment-timezone';
import jstz from 'jstz';
import { usePrevious } from '../../hooks';
import Loader from "react-loader-spinner";
import GaugeChart from 'react-gauge-chart';
import { FaCaretUp, FaCaretDown, FaCog } from 'react-icons/fa';

interface GlqProps {
}

// TODO: refactor and move so all projects can access this
Moment.globalFormat = "YYYY-MM-DD HH:mm:ss";
const m  = moment();
const tz = jstz.determine().name();
const z  = moment().format("Z");
const zz = m.tz(tz).zoneAbbr();

const circSupply = 323000000;
const maxSupply  = 500000000;

type SortType = {
  key: string;
  direction: string
}

const useSortableData = (items: any, config: SortType) => {
  const [sortConfig, setSortConfig] = useState<SortType>(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a:any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: any) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const GraphLinqContent: React.FC<GlqProps> = ({ }) => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});
  const glqHistory = useSelector((state: RootState) => state.glqHistory || {});
  const glqTrades = useSelector((state: RootState) => state.postGlqTradesSelect);
  const [count, setCount] = useState(0);
  const prevCount: number = usePrevious<number>(count);

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
    dispatch({ type: POST_HISTORY_GLQ, payLoad: glqHistory })
    dispatch({ type: POST_GLQ_TRADES, payLoad: glqTrades })
  }, []);

  useEffect(() => {
    setCount(glqTrades.length);
  }, [glqTrades && glqTrades.length]);

  const dc = glqState.total_supply * glqState.price;
  const tb = maxSupply - glqState.total_supply;
  const pd = deltaDirection(glqState.price, glqHistory.price);
  const hd = deltaDirection(glqState.holders, glqHistory.holders);
  const vd = deltaDirection(glqState.volume, glqHistory.volume);
  const md = deltaDirection(glqState.market_cap, glqHistory.market_cap);

  const glqTradesData = glqTrades.map((item: any, index: number) => {
    return {
      timestamp: item.timestamp,
      amount0In: item.amount0In,
      amount1In: item.amount1In,
      amount0Out: item.amount0Out,
      amount1Out: item.amount1Out,
      amountglq: item.amount0In === 0 ? parseFloat(item.amount0Out) : parseFloat(item.amount0In) &&
                  item.amount0Out === 0 ? parseFloat(item.amount0In) : parseFloat(item.amount0Out),
      totaleth: item.amount1In === 0 ? parseFloat(item.amount1Out) : parseFloat(item.amount1In) &&
                  item.amount1Out === 0 ? parseFloat(item.amount1In) : parseFloat(item.amount1Out),
      to: item.to,
      from: item.from,
    }
  } )

  let buyArr = [];
  let sellArr = [];

  if (glqTrades && glqTrades.length) {
    buyArr = glqTrades.filter((e: any) => (e.amount0In === 0))
    sellArr = glqTrades.filter((e: any) => (e.amount1In === 0))
  }

  const buyPr  : any = ((buyArr.length / glqTrades.length) * 100).toFixed(2);
  const sellPr : any = ((sellArr.length / glqTrades.length) * 100).toFixed(2);
  // TODO: Use Largest Remainder Method and add/subtract a few percent abbove/below 50 to Pressure
  const gaugePr: any = parseFloat(buyPr) / 100.0;

  function getBuyorSell(item: any, index: number) {
    const isNew = (glqTradesData.length - prevCount) > index;
    if ((item.amount0Out > 0) && (item.amount1In > 0)) {
      return (
        <tr className={`ar ${isNew ? 'ar-new' : ''}`} key={index}>
          <td>
            <Moment interval={0}>
              {item.timestamp * 1000}
            </Moment>
          </td>
          <td><span className="gre">Buy</span></td>
          <td>-</td>
          <td>-</td>
          <td>{formatSupply(item.amount0Out, 0, 0)}</td>
          <td>{formatSupply(item.amount1In, 6, 6)}</td>
          <td><a href={`https://etherscan.io/address/${item.to}`} target="_blank">...{item.to.substr(item.to.length - 7)}</a></td>
          <td><a target="_blank" href="https://uniswap.exchange/swap/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24">&#129412;</a></td>
          <td>-</td>
        </tr>
      )
    } else if ((item.amount0In > 0) && (item.amount1Out > 0)) {
      return (
        <tr className={`ar ${isNew ? 'ar-new' : ''}`} key={index}>
          <td>
            <Moment interval={0}>
              {item.timestamp * 1000}
            </Moment>
          </td>
          <td><span className="red">Sell</span></td>
          <td>-</td>
          <td>-</td>
          <td>{formatSupply(item.amount0In, 0, 0)}</td>
          <td>{formatSupply(item.amount1Out, 6, 6)}</td>
          <td><a href={`https://etherscan.io/address/${item.to}`} target="_blank">...{item.to.substr(item.to.length - 7)}</a></td>
          <td><a target="_blank" href="https://uniswap.exchange/swap/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24">&#129412;</a></td>
          <td>-</td>
        </tr>
      )
    }
    return null;
  }

  const { items, requestSort, sortConfig } = useSortableData(glqTradesData, {key: 'timestamp', direction: 'descending'});
  const getClassNamesFor = (timestamp: any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === timestamp ? sortConfig.direction : undefined;
  };

  return (
    <main id="m">
      <div>
        <div className="cl">
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Price (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      glqState.price ? formatCur(glqState.price, 5, 5) : 'Loading...'
                    }
                  </strong>
                  {glqState.price
                    ? <span className={pd.color}> {pd.caret} {pd.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Volume (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      glqState.volume ? formatCur(glqState.volume, 0, 0) : 'Loading...'
                    }
                  </strong>
                  {glqState.volume
                    ? <span className={vd.color}> {vd.caret} {vd.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Holders (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      glqState.holders ? formatSupply(glqState.holders, 0, 0) : 'Loading...'
                    }
                  </strong>
                  {glqState.holders
                    ? <span className={hd.color}> {hd.caret} {hd.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>All-Time High</small>
                <h2>
                  <strong>
                    {
                      glqState.price ? formatCur(glqState.ath, 5, 5) : 'Loading...'
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33x">
            <div>
              <div className="top">
                <small>Market Cap (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      glqState.market_cap ? formatCur(glqState.market_cap, 2, 2) : 'Loading...'
                    }
                  </strong>
                  {glqState.market_cap
                    ? <span className={md.color}> {md.caret} {md.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33x">
            <div>
              <div className="top">
                <small>Fully Diluted Market Cap</small>
                <h2>
                  <strong>
                    {
                      dc ? formatCur(dc, 2, 2) : 'Loading...'
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Burned</small>
                <h2>
                  <strong>
                    {
                      tb ? formatSupply(tb, 0, 0) : 'Loading...'
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Circulating Supply</small>
                <h2>
                  <strong>
                    {
                      formatSupply(circSupply, 0, 0)
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Total Supply</small>
                <h2>
                  <strong>
                    {
                      glqState.total_supply ? formatSupply(glqState.total_supply, 0, 0) : 'Loading...'
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Maximum Supply</small>
                <h2>
                  <strong>
                    {
                      formatSupply(maxSupply, 0, 0)
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl100">
            <div>
              <div className="top">
                <div className="tblc">
                  <div className="tclearfix">
                    <div className="tzleft">
                      <small>
                        { glqTrades.length ? 'Last ' + formatSupply(glqTrades.length, 0, 0) + ' Trades' : 'Loading...' }
                      </small>
                      <h2>
                        <strong>GLQ Trades</strong>
                      </h2>
                    </div>
                    <div className="tzcenter">
                      <GaugeChart id="gauge-chart1"
                        animate={true}
                        nrOfLevels={4}
                        percent={(isNaN(gaugePr) ? .5 : gaugePr)}
                        needleColor="#f20350"
                        style={{ width: '33%', margin: 'auto', top: '-25px' }}
                        colors={['#ff052a', '#38ff17']}
                        arcsLength={[0.5, 0.5, 0.5, 0.5]}
                        hideText={true}
                        arcPadding={0.04}
                        cornerRadius={10}
                      />
                    </div>
                    <div className="tzright">
                      <GaugeChart id="gauge-chart1"
                        animate={true}
                        nrOfLevels={2}
                        percent={(isNaN(gaugePr) ? .5 : gaugePr)}
                        needleColor="#f20350"
                        style={{ width: '33%', margin: 'auto', top: '-25px' }}
                        colors={['#ff052a', '#38ff17']}
                        arcsLength={[0.5, 0.5]}
                        hideText={true}
                        arcPadding={0.04}
                        cornerRadius={10}
                      />
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tleft">
                      &nbsp;
                    </div>
                    <div className="tcenter">
                    <small>
                      <span className="red"><FaCaretDown />&nbsp;{(isNaN(sellPr) ? 50 : sellPr)}%</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="gre"><FaCaretUp />&nbsp;{(isNaN(buyPr) ? 50 : buyPr)}%</span>
                      </small>
                    </div>
                    <div className="tright">
                      <small>
                        <span className="red"><FaCaretDown />&nbsp;{(isNaN(sellPr) ? 50 : sellPr)}%</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="gre"><FaCaretUp />&nbsp;{(isNaN(buyPr) ? 50 : buyPr)}%</span>
                      </small>
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tbleft">
                      &nbsp;
                    </div>
                    <div className="tbcenter">
                      <small>{(isNaN(sellPr) ? 'Loading...' : 'Buy / Sell Pressure')}</small>
                    </div>
                    <div className="tbright">
                      <small>{(isNaN(sellPr) ? 'Loading...' : 'Buy / Sell Pressure')}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tbl">
                <div className="tblc">
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <button
                              type="button"
                              onClick={() => requestSort('timestamp')}
                              className={getClassNamesFor('timestamp')}
                            >
                              Date ({z} {zz})
                            </button>
                          </th>
                          <th>
                            <button
                              onClick={() => requestSort('amount0In')}
                              className={getClassNamesFor('amount0In')}
                            >
                              Type
                            </button>
                          </th>
                          <th><button className="sort-disabled">Price USD</button></th>
                          <th><button className="sort-disabled">Price ETH</button></th>
                          <th>
                            <button
                              onClick={() => requestSort('amountglq')}
                              className={getClassNamesFor('amountglq')}
                            >
                              Amt GLQ
                            </button>
                          </th>
                          <th>
                            <button
                              onClick={() => requestSort('totaleth')}
                              className={getClassNamesFor('totaleth')}
                            >
                              Total ETH
                            </button>
                          </th>
                          <th>
                            <button className="sort-disabled">Maker</button>
                          </th>
                          <th><button className="sort-disabled">Ex</button></th>
                          <th><button className="sort-disabled">Other</button></th>
                        </tr>
                      </thead>
                      {
                        glqTrades.length ? '' : <div className="tmp-spin"><Loader type="ThreeDots" color="#f20350" height={30} width={30} /></div>
                      }
                      {glqTrades.length >0 && <tbody>
                        {items.map((item: any, index: number) => {
                          return getBuyorSell(item, index)
                        })}
                      </tbody>
                      }
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GraphLinqContent;
