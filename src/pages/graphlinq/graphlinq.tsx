import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_SELECTED_GLQ } from '../../store/actionNames/glqAction';
import { RootState } from '../../store/reducers';
import '../../app.css'

interface GlqProps {

}
let CurrencyFormat = require('react-currency-format');

const GraphLinqContent: React.FC<GlqProps> = ({ }) => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
  }, [])
  // console.log("Graphliq header glqState::", glqState)

  return (
    <main id="m">
      <div>
        <div className="cl">
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Price</small>
                <h2>
                  <strong>
                    <CurrencyFormat
                      style={{font: 'inherit'}}
                      value={parseFloat(glqState.price).toFixed(6)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </strong> <span className="gr">+4.73%</span>
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
                    <CurrencyFormat
                      style={{font: 'inherit'}}
                      value={parseFloat(glqState.ath).toFixed(6)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Holders</small>
                <h2>
                  <strong>
                    <CurrencyFormat
                      style={{font: 'inherit'}}
                      value={glqState.holders}
                      displayType={'text'}
                      thousandSeparator={true}
                    />
                  </strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>24hr Volume</small>
                <h2>
                  <strong>
                    <CurrencyFormat
                      style={{font: 'inherit'}}
                      value={parseFloat(glqState.volume).toFixed(2)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Market Cap</small>
                <h2>
                  <strong>
                    <CurrencyFormat
                      style={{font: 'inherit'}}
                      value={parseFloat(glqState.market_cap).toFixed(2)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Total Supply</small>
                <h2>
                  <strong>
                    <CurrencyFormat
                      style={{font: 'inherit'}}
                      value={glqState.total_supply}
                      displayType={'text'}
                      thousandSeparator={true}
                    />
                  </strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GraphLinqContent;
