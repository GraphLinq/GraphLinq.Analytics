import React, { useState, useEffect } from 'react'
import { POST_SELECTED_UNCL, POST_SELECTED_UNCX, POST_TOTAL_LIQUIDITY, POST_LIQUIDITY } from '../../store/actionNames/glqAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import '../../app.css'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, Crosshair, VerticalGridLines, VerticalBarSeries, LineSeries } from 'react-vis';
import GraphLinqContent from '../graphlinq/graphlinq';
interface UnclProps {

}
let CurrencyFormat = require('react-currency-format');

const UnicryptContent: React.FC<UnclProps> = ({ }) => {

  const [crosshairValues, setCrosshairValues] = useState<any[]>([]);
  const dispatch = useDispatch();
  const unclState = useSelector((state: RootState) => state.unclSelect || {});
  const uncxState = useSelector((state: RootState) => state.uncxSelect || {});
  const totalLiquidityState = useSelector((state: RootState) => state.totalLiquiditySelect || {});
  const liquidityState = useSelector((state: RootState) => state.liquiditySelect[0] || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_UNCL, payLoad: unclState })
    dispatch({ type: POST_SELECTED_UNCX, payLoad: uncxState })
    dispatch({ type: POST_TOTAL_LIQUIDITY, payLoad: totalLiquidityState})
    dispatch({ type: POST_LIQUIDITY, payLoad: liquidityState })
  }, [])
  // console.log("unicrypt content unclstate:: ", unclState)
  // console.log("unicrypt content uncxState:: ", uncxState)
  // console.log("unicrypt content liquidityState:: ", liquidityState)
  // console.log("unicrypt content totalLiquidityState:: ", totalLiquidityState)

  const newArr = totalLiquidityState.map((item: any, index: number) => {
    return { x: index, y: parseFloat(item).toFixed(2) }
  });

  const totalLiquidityData = [
    newArr,
    []
  ]

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
                    <CurrencyFormat
                      style={{font: 'inherit'}}
                      value={parseFloat(liquidityState.USDValue).toFixed(2)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </strong> <span className="gr">+4.73%</span>
                </h2>
              </div>
              <div className="chart">
                <XYPlot
                  style={{margin: 'auto'}}
                  height={200}
                  width={300}
                  xDomain={[0, 100]}
                  yDomain={[400000000, 1000000000]}
                  onMouseLeave={() => setCrosshairValues([])}
                >
                  <LineSeries
                    curve={'curveMonotoneX'}
                    data={totalLiquidityData[0]}
                    color="#f20350"
                    onNearestX={(value, {index}) => setCrosshairValues(totalLiquidityData.map(d => d[index]))}
                  />
                  <XAxis title="" />
                  <YAxis title="" />
                  <Crosshair values={crosshairValues}/>
                </XYPlot>
              </div>
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
        </div>
      </div>
    </main>
  );
}

export default UnicryptContent;
