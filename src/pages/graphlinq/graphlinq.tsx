import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_SELECTED_GLQ, POST_HISTORY_GLQ } from '../../store/actionNames/glqAction';
import { RootState } from '../../store/reducers';
import '../../app.css'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

interface GlqProps {

}

const circSupply = 323000000;
const maxSupply = 500000000;

function upCarot() {
    return <FaCaretUp />
}
function downCarot() {
    return <FaCaretDown />
}

const formatConfig = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 12,
  currencyDisplay: "symbol",
};
const numFormatter = new Intl.NumberFormat("en-US", formatConfig);

function formatNum(num: any) {
  let format = numFormatter.format(num);
  return format;
}

const supplyConfig = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 6,
}
const supplyFormatter = new Intl.NumberFormat("en-US", supplyConfig);

function formatSupply(num: any) {
  let format = supplyFormatter.format(num);
  return format;
}

const mcConfig = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  currencyDisplay: "symbol",
}
const mcFormatter = new Intl.NumberFormat("en-US", mcConfig);

function formatMcap(num: any) {
  let format = mcFormatter.format(num);
  return format;
}

const deltaConfig = {
   style: 'percent',
   minimumFractionDigits: 2,
   maximumFractionDigits: 2
};
const deltaFormatter = new Intl.NumberFormat("en-US",deltaConfig);

function formatDelta(num: any) {
  let format = deltaFormatter.format(num);
  return format;
}

const GraphLinqContent: React.FC<GlqProps> = ({ }) => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});
  const glqHistory = useSelector((state: RootState) => state.glqHistory || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
    dispatch({ type: POST_HISTORY_GLQ, payLoad: glqHistory })
  }, [])

  // clean this mess up...
  let dilutedMarketCap = glqState.total_supply * glqState.price;

  let priceDelta = ((glqState.price - glqHistory.price) / glqHistory.price);
  let priceDeltaResult = Math.abs(priceDelta);
  let priceDeltaClass = (priceDelta >= 0) ? "gr" : "re";
  let priceDeltaPrefix = (priceDelta >= 0) ? upCarot() : downCarot();

  let holderDelta = ((glqState.holders - glqHistory.holders) / glqHistory.holders);
  let holderDeltaResult = Math.abs(holderDelta);
  let holderDeltaClass = (holderDelta >= 0) ? "gr" : "re";
  let holderDeltaPrefix = (holderDelta >= 0) ? upCarot() : downCarot();

  let mcDelta = ((glqState.market_cap - glqHistory.market_cap) / glqHistory.market_cap);
  let mcDeltaResult = Math.abs(mcDelta);
  let mcDeltaClass = (mcDelta >= 0) ? "gr" : "re";
  let mcDeltaPrefix = (mcDelta >= 0) ? upCarot() : downCarot();

  let volDelta = ((glqState.volume - glqHistory.volume) / glqHistory.volume);
  let volDeltaResult = Math.abs(volDelta);
  let volDeltaClass = (volDelta >= 0) ? "gr" : "re";
  let volDeltaPrefix = (volDelta >= 0) ? upCarot() : downCarot();

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
                      formatNum(glqState.price)
                    }
                  </strong> <span className={priceDeltaClass}> {priceDeltaPrefix} {formatDelta(priceDeltaResult)}</span>
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
                      formatNum(glqState.ath)
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
                  </strong> <span className={holderDeltaClass}> {holderDeltaPrefix} {formatDelta(holderDeltaResult)}</span>
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
                      formatNum(glqState.volume)
                    }
                  </strong> <span className={volDeltaClass}> {volDeltaPrefix} {formatDelta(volDeltaResult)}</span>
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
                      formatMcap(glqState.market_cap)
                    }
                  </strong> <span className={mcDeltaClass}> {mcDeltaPrefix} {formatDelta(mcDeltaResult)}</span>
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
                      formatMcap(dilutedMarketCap)
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
                      formatSupply(circSupply)
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
                      formatSupply(glqState.total_supply)
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
                      formatSupply(maxSupply)
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
