import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_SELECTED_GLQ, POST_HISTORY_GLQ, POST_GLQ_TRADES } from '../../store/actionNames/glqAction';
import { RootState } from '../../store/reducers';
import '../../app.css'
import { formatCur, formatSupply, deltaDirection } from '../../utils';
import Moment from 'react-moment';
import moment from 'moment-timezone';
import jstz from 'jstz';

interface GlqProps {
}

// TODO: refactor and move so all projects can access this
Moment.globalFormat = "YYYY-MM-DD HH:mm:ss";
const m = moment();
const tzName = jstz.determine().name();
const z = moment().format("Z");
const zz = m.tz(tzName).zoneAbbr();

const circSupply = 323000000;
const maxSupply  = 500000000;

const GraphLinqContent: React.FC<GlqProps> = ({ }) => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});
  const glqHistory = useSelector((state: RootState) => state.glqHistory || {});
  const glqTrades = useSelector((state: RootState) => state.postGlqTradesSelect || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
    dispatch({ type: POST_HISTORY_GLQ, payLoad: glqHistory })
    dispatch({ type: POST_GLQ_TRADES, payLoad: glqTrades })
  }, [])

  const dc = glqState.total_supply * glqState.price;
  const pd = deltaDirection(glqState.price, glqHistory.price);
  const hd = deltaDirection(glqState.holders, glqHistory.holders);
  const vd = deltaDirection(glqState.volume, glqHistory.volume);
  const md = deltaDirection(glqState.market_cap, glqHistory.market_cap);

  function getBuyorSell(item: any, index: number) {
    if ((item.amount0Out > 0) && (item.amount1In > 0)) {
      return (
        <tr className="ar" key={index}>
            <td>
              <Moment interval={0}>
                {item.timestamp*1000}
              </Moment>
            </td>
            <td><span className="gre">Buy</span></td>
            <td>-</td>
            <td>-</td>
            <td>{formatSupply(item.amount0Out, 0, 0)}</td>
            <td>{formatSupply(item.amount1In, 8, 8)}</td>
            <td><a href={`https://etherscan.io/address/${item.to}`} target="_blank">...{item.to.substr(item.to.length-10)}</a></td>
            <td><a target="_blank" href="https://uniswap.exchange/swap/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24">&#129412;</a></td>
            <td>-</td>
        </tr>
      )
    } else if ((item.amount0In > 0) && (item.amount1Out > 0)) {
        return (
      <tr className="ar" key={index}>
            <td>
              <Moment interval={0}>
                {item.timestamp*1000}
              </Moment>
            </td>
            <td><span className="red">Sell</span></td>
            <td>-</td>
            <td>-</td>
            <td>{formatSupply(item.amount0In, 0, 0)}</td>
            <td>{formatSupply(item.amount1Out, 8, 8)}</td>
            <td><a href={`https://etherscan.io/address/${item.to}`} target="_blank">...{item.to.substr(item.to.length-10)}</a></td>
            <td><a target="_blank" href="https://uniswap.exchange/swap/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24">&#129412;</a></td>
            <td>-</td>
        </tr>
    )}
    return null;
  }

  return (
    <main id="m">
      <div>
        <div className="cl">
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Price (24Hrs)</small>
                <h2>
                  <strong>
                  {
                  glqState.price ? formatCur(glqState.price, 2, 12) : 'Loading...'
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
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>All-Time High</small>
                <h2>
                  <strong>
                    {
                      glqState.price ? formatCur(glqState.ath, 2, 12) : 'Loading...'
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Holders (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      glqState.holders ? glqState.holders : 'Loading...'
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
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Volume (24Hrs)</small>
                <h2>
                  <strong>
                    {
                      glqState.volume ? formatCur(glqState.volume, 2, 2) : 'Loading...'
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
          <div className="blc cl50">
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
          <div className="blc cl33">
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
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Total Supply</small>
                <h2>
                  <strong>
                    {
                      formatSupply(glqState.total_supply, 0, 0)
                    }
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
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
                <small>Last {glqTrades.length} trades</small>
                <h2>
                  <strong>GLQ Trades</strong>
                </h2>
              </div>
              <div className="tbl">
                <div className="tblc">
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Date ({z} {zz})</th>
                          <th>Type</th>
                          <th>Price USD</th>
                          <th>Price ETH</th>
                          <th>Amount GLQ</th>
                          <th>Total ETH</th>
                          <th>Maker</th>
                          <th>Exch</th>
                          <th>Other</th>
                        </tr>
                      </thead>
                      {glqTrades.length > 0 && <tbody>
                        { glqTrades.slice(0).reverse().map((item: any, index: number) => {
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
