import React, { useState, useEffect } from 'react'
import { POST_SELECTED_UNCL, POST_SELECTED_UNCX, POST_TOTAL_LIQUIDITY, POST_LIQUIDITY } from '../../store/actionNames/glqAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import '../../app.css'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, Crosshair, VerticalGridLines, VerticalBarSeries, LineSeries, AreaSeries, FlexibleXYPlot, FlexibleWidthXYPlot } from 'react-vis';
import { Box } from '@chakra-ui/react';

interface UnclProps {

}
let pow = (Math.pow(10, 8));

const UnicryptContent: React.FC<UnclProps> = ({ }) => {

  const dispatch = useDispatch();
  const unclState = useSelector((state: RootState) => state.unclSelect || {});
  const uncxState = useSelector((state: RootState) => state.uncxSelect || {});
  const totalLiquidityState = useSelector((state: RootState) => state.totalLiquiditySelect || {});
  const liquidityState = useSelector((state: RootState) => state.liquiditySelect[0] || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_UNCL, payLoad: unclState })
    dispatch({ type: POST_SELECTED_UNCX, payLoad: uncxState })
    dispatch({ type: POST_TOTAL_LIQUIDITY, payLoad: totalLiquidityState })
    dispatch({ type: POST_LIQUIDITY, payLoad: liquidityState })
  }, [])
  // console.log("unicrypt content unclstate:: ", unclState)
  // console.log("unicrypt content uncxState:: ", uncxState)
  // console.log("unicrypt content liquidityState:: ", liquidityState)
  //console.log("unicrypt content totalLiquidityState:: ", totalLiquidityState)

  const newArr = totalLiquidityState.map((item: any, index: number) => {
    return { x: index, y: parseFloat(item).toFixed(2) }
  });

  const reArr = totalLiquidityState.map((item: any, index: number) => {
    // TODO: multiple by price and get $ value?
    // It kinda doesn't make sense that the title shows the dollar amount and graph shows total tokens?
    //return { x: index, y:('$' + parseFloat(item).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')) }
    // displaying as is for now or we just hide this?
    // Hiding this for now...

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


  function formatNum(num: any) {

    num = parseFloat(num).toFixed(2)
    let format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)

    return format
  }

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
                    formatNum(liquidityState.USDValue)
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
                  <YAxis tickPadding={2} title="Value" tickLabelAngle={0} tickFormat={v => `${abbrNum(v)}`} tickValues={[yMinValue, 4.5 * pow, 5 * pow, 6 * pow, 7 * pow, 8 * pow, 9 * pow, 9.5 * pow, yMaxValue]} />
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
        </div>
      </div>
    </main>
  );
}

export default UnicryptContent;
