/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  POST_SELECTED_UNCL,
  POST_SELECTED_UNCX
} from "../../store/actionNames/glqAction";
import { RootState } from "../../store/reducers";
import "../../app.css";
import { formatCur, formatSupply } from "../../utils";

interface UnicryptProps {}

const UnicryptContent: React.FC<UnicryptProps> = () => {
  const dispatch = useDispatch();
  const unclState = useSelector((state: RootState) => state.uncxSelect || {});
  const uncxState = useSelector((state: RootState) => state.uncxSelect || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_UNCL, payLoad: unclState });
    dispatch({ type: POST_SELECTED_UNCX, payLoad: uncxState });

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
                    {uncxState.rate
                      ? formatCur(uncxState.rate, 5, 5)
                      : "Loading..."}
                  </strong>
                  {uncxState.rate ? (
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
                    {uncxState.volume
                      ? formatCur(uncxState.volume, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.volume ? (
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
                    {uncxState.allTimeHighUSD
                      ? formatCur(uncxState.allTimeHighUSD, 5, 5)
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
                    {uncxState.cap
                      ? formatCur(uncxState.cap, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.cap ? (
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
                    {uncxState.pairs
                      ? formatSupply(uncxState.pairs, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.pairs ? (
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
                    {uncxState.markets
                      ? formatSupply(uncxState.markets, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.markets ? (
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
                <small>Circulating Supply</small>
                <h2>
                <strong>
                    {uncxState.circulatingSupply
                      ? formatSupply(uncxState.circulatingSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.circulatingSupply ? (
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
                <small>Total Supply</small>
                <h2>
                  <strong>
                    {uncxState.totalSupply
                      ? formatSupply(uncxState.totalSupply, 0, 0)
                      : "Loading..."}
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
                    {uncxState.maxSupply
                      ? formatSupply(uncxState.maxSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                  {uncxState.maxSupply ? (
                    <span>
                    </span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default UnicryptContent;
