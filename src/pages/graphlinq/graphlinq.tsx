import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_SELECTED_GLQ, POST_HISTORY_GLQ } from '../../store/actionNames/glqAction';
import { RootState } from '../../store/reducers';
import '../../app.css'
import { formatCur, formatSupply, deltaDirection } from '../../utils';

interface GlqProps {

}

const circSupply = 323000000;
const maxSupply  = 500000000;

const GraphLinqContent: React.FC<GlqProps> = ({ }) => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});
  const glqHistory = useSelector((state: RootState) => state.glqHistory || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
    dispatch({ type: POST_HISTORY_GLQ, payLoad: glqHistory })
  }, [])

  const dc = glqState.total_supply * glqState.price;
  const pd = deltaDirection(glqState.price, glqHistory.price);
  const hd = deltaDirection(glqState.holders, glqHistory.holders);
  const vd = deltaDirection(glqState.volume, glqHistory.volume);
  const md = deltaDirection(glqState.market_cap, glqHistory.market_cap);

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
                      formatCur(glqState.price, 2, 12)
                    }
                  </strong> <span className={pd.color}> {pd.caret} {pd.delta}</span>
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
                      formatCur(glqState.ath, 2, 12)
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
                      glqState.holders
                    }
                  </strong> <span className={hd.color}> {hd.caret} {hd.delta}</span>
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
                      formatCur(glqState.volume, 2, 2)
                    }
                  </strong> <span className={vd.color}> {vd.caret} {vd.delta}</span>
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
                      formatCur(glqState.market_cap, 2, 2)
                    }
                  </strong> <span className={md.color}> {md.caret} {md.delta}</span>
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
                      formatCur(dc, 2, 2)
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
          {<div className="blc cl100">
            <div>
              <div className="top">
                <small>Last 663 trades</small>
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
                          <th>Date</th>
                          <th>Type</th>
                          <th>Price USD</th>
                          <th>Price ETH</th>
                          <th>Amount GLQ</th>
                          <th>Total ETH</th>
                          <th>Maker</th>
                          <th>Other</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2021-03-31 19:03:26</td>
                          <td className="gre">Buy</td>
                          <td>$0.07410636</td>
                          <td>0.000004002</td>
                          <td>5,000.00</td>
                          <td>0.200009925</td>
                          <td><a href="">...bad8z8ddd4fcc87</a></td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>2021-03-31 19:03:26</td>
                          <td className="red">Sell</td>
                          <td>$0.07410636</td>
                          <td>0.000004002</td>
                          <td>5,000.00</td>
                          <td>0.200009925</td>
                          <td><a href="">...bad8z8ddd4fcc87</a></td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>2021-03-31 19:03:26</td>
                          <td className="gre">Buy</td>
                          <td>$0.07410636</td>
                          <td>0.000004002</td>
                          <td>5,000.00</td>
                          <td>0.200009925</td>
                          <td><a href="">...bad8z8ddd4fcc87</a></td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>2021-03-31 19:03:26</td>
                          <td className="gre">Buy</td>
                          <td>$0.07410636</td>
                          <td>0.000004002</td>
                          <td>5,000.00</td>
                          <td>0.200009925</td>
                          <td><a href="">...bad8z8ddd4fcc87</a></td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>2021-03-31 19:03:26</td>
                          <td className="gre">Buy</td>
                          <td>$0.07410636</td>
                          <td>0.000004002</td>
                          <td>5,000.00</td>
                          <td>0.200009925</td>
                          <td><a href="">...bad8z8ddd4fcc87</a></td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </main>
  );
}

export default GraphLinqContent;
