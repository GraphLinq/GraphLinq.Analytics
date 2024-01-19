/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  POST_SELECTED_POLYGON,
  POST_SELECTED_ETH_PRICE,
} from "../../store/actionNames/glqAction";
import { RootState } from "../../store/reducers";
import "../../app.css";
import { formatCur, formatSupply } from "../../utils";

interface PolygonProps {}

const PolygonContent: React.FC<PolygonProps> = () => {
  const dispatch = useDispatch();
  const polygonState = useSelector((state: RootState) => state.polygonSelect || {});
  const ethPrice = useSelector((state: RootState) => state.ethPriceSelect || 0);

  useEffect(() => {
    dispatch({ type: POST_SELECTED_POLYGON, payLoad: polygonState });
    dispatch({ type: POST_SELECTED_ETH_PRICE, payLoad: ethPrice });
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
                    {polygonState.rate
                      ? formatCur(polygonState.rate, 5, 5)
                      : "Loading..."}
                  </strong>
                  {polygonState.rate ? (
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
                    {polygonState.volume
                      ? formatCur(polygonState.volume, 0, 0)
                      : "Loading..."}
                  </strong>
                  {polygonState.volume ? (
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
                    {polygonState.allTimeHighUSD
                      ? formatCur(polygonState.allTimeHighUSD, 5, 5)
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
                    {polygonState.cap
                      ? formatCur(polygonState.cap, 0, 0)
                      : "Loading..."}
                  </strong>
                  {polygonState.cap ? (
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
                    {polygonState.pairs
                      ? formatSupply(polygonState.pairs, 0, 0)
                      : "Loading..."}
                  </strong>
                  {polygonState.market_pairs ? (
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
                    {polygonState.markets
                      ? formatSupply(polygonState.markets, 0, 0)
                      : "Loading..."}
                  </strong>
                  {polygonState.markets ? (
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
                    {polygonState.circulatingSupply
                      ? formatSupply(polygonState.circulatingSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                  {polygonState.circulatingSupply ? (
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
                    {polygonState.totalSupply
                      ? formatSupply(polygonState.totalSupply, 0, 0)
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
                    {polygonState.maxSupply
                      ? formatSupply(polygonState.maxSupply, 0, 0)
                      : "Loading..."}
                  </strong>
                  {polygonState.maxSupply ? (
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
export default PolygonContent;
