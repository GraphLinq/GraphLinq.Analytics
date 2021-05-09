import React, { useState, useEffect, useMemo } from 'react'
import { POST_SELECTED_UNCL, POST_SELECTED_UNCX, POST_TOTAL_LIQUIDITY, POST_LIQUIDITY, POST_UNCX_TRADES, POST_HISTORY_UNCX } from '../../store/actionNames/glqAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import '../../app.css'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, Crosshair, VerticalGridLines, VerticalBarSeries, LineSeries, AreaSeries, FlexibleXYPlot, FlexibleWidthXYPlot } from 'react-vis';
import { Box } from '@chakra-ui/react';
import { formatCur, formatSupply, deltaDirection } from '../../utils';
import Moment from 'react-moment';
import moment from 'moment-timezone';
import jstz from 'jstz';
import { usePrevious } from '../../hooks';
import Loader from "react-loader-spinner";
import GaugeChart from 'react-gauge-chart';
import { FaCaretUp, FaCaretDown, FaCog } from 'react-icons/fa';

interface UnclProps {

}

Moment.globalFormat = "YYYY-MM-DD HH:mm:ss";
const m  = moment();
const tz = jstz.determine().name();
const z  = moment().format("Z");
const zz = m.tz(tz).zoneAbbr();

type SortType = {
  key: string;
  direction: string
}

const circSupply = 36163;
const maxSupply  = 47650;

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

let pow = (Math.pow(10, 8));

const UnicryptContent: React.FC<UnclProps> = ({ }) => {

  const dispatch = useDispatch();
  const unclState = useSelector((state: RootState) => state.unclSelect || {});
  const uncxState = useSelector((state: RootState) => state.uncxSelect || {});
  const totalLiquidityState = useSelector((state: RootState) => state.totalLiquiditySelect || {});
  const liquidityState = useSelector((state: RootState) => state.liquiditySelect[0] || {});
  const uncxHistory = useSelector((state: RootState) => state.uncxHistory || {});
  const uncxTrades = useSelector((state: RootState) => state.postUncxTradesSelect);
  const [count, setCount] = useState(0);
  const prevCount: number = usePrevious<number>(count);

  useEffect(() => {
    dispatch({ type: POST_SELECTED_UNCL, payLoad: unclState })
    dispatch({ type: POST_SELECTED_UNCX, payLoad: uncxState })
    dispatch({ type: POST_TOTAL_LIQUIDITY, payLoad: totalLiquidityState })
    dispatch({ type: POST_LIQUIDITY, payLoad: liquidityState })
    dispatch({ type: POST_HISTORY_UNCX, payLoad: uncxHistory })
    dispatch({ type: POST_UNCX_TRADES, payLoad: uncxTrades })
  }, [])

  useEffect(() => {
    setCount(uncxTrades.length);
  }, [uncxTrades && uncxTrades.length]);

  const dc = uncxState.total_supply * uncxState.price;
  const tb = maxSupply - uncxState.total_supply;
  const pd = deltaDirection(uncxState.price, uncxHistory.price);
  const hd = deltaDirection(uncxState.holders, uncxHistory.holders);
  const vd = deltaDirection(uncxState.volume, uncxHistory.volume);
  const md = deltaDirection(uncxState.market_cap, uncxHistory.market_cap);

  const uncxTradesData = uncxTrades.map((item: any, index: number) => {
    return {
      timestamp: item.timestamp,
      amount0In: item.amount0In,
      amount1In: item.amount1In,
      amount0Out: item.amount0Out,
      amount1Out: item.amount1Out,
      amountuncx: item.amount0In === 0 ? parseFloat(item.amount0Out) : parseFloat(item.amount0In) &&
                  item.amount0Out === 0 ? parseFloat(item.amount0In) : parseFloat(item.amount0Out),
      totaleth: item.amount1In === 0 ? parseFloat(item.amount1Out) : parseFloat(item.amount1In) &&
                  item.amount1Out === 0 ? parseFloat(item.amount1In) : parseFloat(item.amount1Out),
      to: item.to,
      from: item.from,
    }
  } )

  let buyArr  = [];
  let sellArr = [];

  if (uncxTrades && uncxTrades.length) {
    buyArr  = uncxTrades.filter((e: any) => (e.amount0In === 0))
    sellArr = uncxTrades.filter((e: any) => (e.amount1In === 0))
  }

  const buyPr   = parseFloat(((buyArr.length / uncxTrades.length) * 100).toFixed(2));
  const sellPr  = parseFloat(((sellArr.length / uncxTrades.length) * 100).toFixed(2));
  const gaugePr = buyPr / 100.0;

  function getBuyorSell(item: any, index: number) {
    const isNew = (uncxTradesData.length - prevCount) > index;
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

  const { items, requestSort, sortConfig } = useSortableData(uncxTradesData, {key: 'timestamp', direction: 'descending'});
  const getClassNamesFor = (timestamp: any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === timestamp ? sortConfig.direction : undefined;
  };

  const newArr = totalLiquidityState.map((item: any, index: number) => {
    return { x: index, y: parseFloat(item).toFixed(2) }
  });

  const reArr = totalLiquidityState.map((item: any, index: number) => {
    return { x: index, y: parseFloat(item).toFixed(2) }
  });

  const totalLiquidityData = [
    newArr, reArr
  ];

  const [crosshairValues, setCrosshairValues] = useState<any[]>(totalLiquidityData);
  const [iscrosshair, setIscrosshair] = useState(false);

  const yMinValue = (Math.floor(Math.min(...totalLiquidityState) / 100000000) * 100000000);
  const yMaxValue = Math.ceil(Math.max(...totalLiquidityState) / 100000000) * 100000000;
  const xMaxValue = (Math.floor(newArr.length / 20) + 1) * 20;

  function abbrNum(num: any) {
    // 2 decimal places => 100, 3 => 1000, etc
    let decPlaces = Math.pow(10,2);

    // Enumerate number abbreviations
    let abbrev = [ "K", "M", "B", "T" ];

    // Go through the array backwards, so we do the largest first
    for (let i=abbrev.length-1; i>=0; i--) {
        // Convert array index to "1000", "1000000", etc
        let size = Math.pow(10,(i+1)*3);
        // If the number is bigger or equal do the abbreviation
        if(size <= num) {
             num = Math.round(num*decPlaces/size)/decPlaces;
             if((num == 1000) && (i < abbrev.length - 1)) {
                 num = 1;
                 i++;
             }
             num += abbrev[i];
             break;
        }
    }
    return num;
  }

  return (
    <main id="m">
      <div>
        <div className="cl">
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Value Locked</small>
                <h2>
                  <strong>
                    {
                    formatCur(liquidityState.USDValue, 2, 2)
                    }
                  </strong> <span className="gr">+4.73%</span>
                </h2>
              </div>
              <Box w="100%" pl={8}>
                <FlexibleWidthXYPlot
                  height={250}
                  xDomain={[0, xMaxValue]}
                  yDomain={[yMinValue, yMaxValue]}
                  onMouseLeave={() => setIscrosshair(false)}
                  onMouseEnter={() => setIscrosshair(true)}
                >
                  <LineSeries
                    curve={'curveLinear'}
                    data={totalLiquidityData[0]}
                    color="#f20350"
                    onNearestX={(value, { index }) => setCrosshairValues(totalLiquidityData.map(d => d[index]))}
                  />
                  <YAxis  style={{text: {fill: '#b7aed6', fontWeight: 400}}}  tickPadding={2} title="Value" tickLabelAngle={0} tickFormat={v => `${abbrNum(v)}`} tickValues={[yMinValue, 4.5 * pow, 5 * pow, 6 * pow, 7 * pow, 8 * pow, 9 * pow, 9.5 * pow, yMaxValue]} />
                  <XAxis hideTicks />
                  {iscrosshair && <Crosshair values={crosshairValues}>
                    <div>
                      <h3>{abbrNum(crosshairValues[1].y)}</h3>
                    </div>
                  </Crosshair>
                  }

                </FlexibleWidthXYPlot>
              </Box>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Farming Liquidity</small>
                <h2>
                  <strong>Chart Amount{/*liquidityState.Amount*/}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
              <div className="chart">
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Staked Liquidity</small>
                <h2>
                  <strong>Chart Amount{/*liquidityState.InitialAmount*/}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
              <div className="chart">
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Staking Rewards Available</small>
                <h2>
                  <strong>Total Amount{/*liquidityState.UnlockDate*/}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Staking Rewards Distributed</small>
                <h2>
                  <strong>Rewards{/*liquidityState.LockID*/}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div style={{ height: "calc(50% - 10px)", marginBottom: '20px' }}>
              <div className="top">
                <small>Total Locked Liquidity</small>
                <h2>
                  <strong>Locked Amount{/*liquidityState.Owner*/}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
            <div style={{ height: "calc(50% - 10px)" }}>
              <div className="top">
                <small>Total Value Locked</small>
                <h2>
                  <strong>Vested Amount{/*liquidityState.USDValue*/}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Price (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      uncxState.price ? formatCur(uncxState.price, 2, 2) : 'Loading...'
                    }
                  </strong>
                  {uncxState.price
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
                      uncxState.volume ? formatCur(uncxState.volume, 0, 0) : 'Loading...'
                    }
                  </strong>
                  {uncxState.volume
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
                      uncxState.holders ? formatSupply(uncxState.holders, 0, 0) : 'Loading...'
                    }
                  </strong>
                  {uncxState.holders
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
                      uncxState.price ? formatCur(uncxState.ath, 2, 2) : 'Loading...'
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Market Cap (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      uncxState.market_cap ? formatCur(uncxState.market_cap, 2, 2) : 'Loading...'
                    }
                  </strong>
                  {uncxState.market_cap
                    ? <span className={md.color}> {md.caret} {md.delta}</span>
                    : ''
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl50">
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
                      uncxState.total_supply ? formatSupply(uncxState.total_supply, 0, 0) : 'Loading...'
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
                        { uncxTrades.length ? 'Last ' + formatSupply(uncxTrades.length, 0, 0) + ' Trades' : 'Loading...' }
                      </small>
                      <h2>
                        <strong>UNCX Trades</strong>
                      </h2>
                    </div>
                    <div className="tzcenter">
                      &nbsp;
                    </div>
                    <div className="tzright">
                      <GaugeChart id="gauge-chart1"
                        animate={true}
                        nrOfLevels={2}
                        percent={(isNaN(gaugePr) ? .5 : gaugePr)}
                        needleColor="#f20350"
                        style={{ width: '33%', margin: 'auto', top: '-25px' }}
                        colors={['#38ff17', '#ff052a']}
                        arcsLength={[(isNaN(buyPr) ? 50 : buyPr), (isNaN(buyPr) ? 50 : sellPr)]}
                        hideText={true}
                        arcPadding={0.06}
                        cornerRadius={8}
                      />
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tleft">
                      &nbsp;
                    </div>
                    <div className="tcenter">
                      &nbsp;
                    </div>
                    <div className="tright">
                      <small>
                        <span className="gre"><FaCaretUp />&nbsp;{(isNaN(buyPr) ? 50 : buyPr)}%</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="red"><FaCaretDown />&nbsp;{(isNaN(sellPr) ? 50 : sellPr)}%</span>
                      </small>
                    </div>
                  </div>
                  <div className="tclearfix">
                    <div className="tbleft">
                      &nbsp;
                    </div>
                    <div className="tbcenter">
                     &nbsp;
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
                              onClick={() => requestSort('amountuncx')}
                              className={getClassNamesFor('amountuncx')}
                            >
                              Amt UNCX
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
                        uncxTrades.length ? '' : <div className="tmp-spin"><Loader type="ThreeDots" color="#f20350" height={30} width={30} /></div>
                      }
                      {uncxTrades.length >0 && <tbody>
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

export default UnicryptContent;
