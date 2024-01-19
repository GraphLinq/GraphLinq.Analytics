/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  POST_SELECTED_GLQ
} from "../../store/actionNames/glqAction";
import { RootState } from "../../store/reducers";
import "../../app.css";
import { formatCur, formatSupply } from "../../utils";

interface GraphlinqProps {}

const GraphlinqContent: React.FC<GraphlinqProps> = () => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState });
  }, []);

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
                    {glqState.rate
                      ? formatCur(glqState.rate, 5, 5)
                      : "Loading..."}
                  </strong>
                  {glqState.rate ? (
                    <span>
                    </span>
                  ) : (
                    ""
                  )}
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
                    {glqState.volume
                      ? formatCur(glqState.volume, 0, 0)
                      : "Loading..."}
                  </strong>
                  {glqState.volume ? (
                    <span>
                    </span>
                  ) : (
                    ""
                  )}
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
                    {glqState.allTimeHighUSD
                      ? formatCur(glqState.allTimeHighUSD, 5, 5)
                      : "Loading..."}
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
                    {glqState.cap
                      ? formatCur(glqState.cap, 0, 0)
                      : "Loading..."}
                  </strong>
                  {glqState.cap ? (
                    <span>
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33x">
            <div>
              <div className="top">
                <small>Trading Pairs</small>
                <h2>
                <strong>
                    {glqState.pairs
                      ? formatSupply(glqState.pairs, 0, 0)
                      : "Loading..."}
                  </strong>
                  {glqState.market_pairs ? (
                    <span>
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25x">
            <div>
              <div className="top">
                <small>Markets</small>
                <h2>
                <strong>
                    {glqState.markets
                      ? formatSupply(glqState.markets, 0, 0)
                      : "Loading..."}
                  </strong>
                  {glqState.markets ? (
                    <span>
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl25">
            <div>
              <div className="top">
                <small>Circulating Supply</small>
                <h2>
                <strong>
                    {glqState.circulatingSupply
                      ? formatSupply(glqState.circulatingSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                  {glqState.circulatingSupply ? (
                    <span>
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl2x">
            <div>
              <div className="top">
                <small>Total Supply</small>
                <h2>
                  <strong>
                    {glqState.totalSupply
                      ? formatSupply(glqState.totalSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default GraphlinqContent;
