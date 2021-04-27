import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import routes from '../../routes/sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { POST_SELECTED_UNCL, POST_SELECTED_UNCX, POST_TOTAL_LIQUIDITY, POST_LIQUIDITY } from '../../store/actionNames/glqAction';

interface UnicyptProps {
}

const HeaderLayout: React.FC<UnicyptProps> = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory();

  function searchFunc(url: string) {
    history.push(url);
  }

  function onCloseMenu() {
    setTimeout(() => {
      setIsOpen(false);
    }, 250);
  }

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
  // console.log("unicrypt header unclstate:: ", unclState)
  // console.log("unicrypt header uncxState:: ", uncxState)
  // console.log("unicrypt header liquidityState:: ", liquidityState)
  // console.log("unicrypt header totalLiquidityState:: ", totalLiquidityState)

  return (
    <header id="h">
      <div className="top">
        <div className="l">
          <button className="bnv" data-nav>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path className="l-1" d="M0,42h62c13,0,6,26-4,16L35,35" />
              <path className="l-2" d="M0,50h70" />
              <path className="l-3" d="M0,58h62c13,0,6-26-4-16L35,65" />
            </svg>
          </button>
          <div className="illu"><img src="/template/img/unicrypt.svg" alt="unicrypt" /></div>
          <div className="tit">
            <h1>Unicrypt</h1>
            <div className="pri">
              UNCX: <strong> ${parseFloat(uncxState.price).toFixed(2)}</strong> | UNCL: <strong> ${parseFloat(unclState.price).toFixed(6)}</strong>
            </div>
          </div>
        </div>
        <div className="r">
          <div id="sc">
            <form>
              <fieldset>
                <div data-search-res />
                <label htmlFor="scr">Search token...</label>
                <input id="scr" type="text" onFocus={() => setIsOpen(true)} onBlur={() => onCloseMenu()} />
              </fieldset>
              {isOpen && <ul className="res">
                {routes.map((route: any, index) => (
                  <li
                    key={index}
                    onClick={() => searchFunc(route.path)}
                  >
                    <div className="il">
                      <img src={route.imgSrc} alt={route.name} />
                    </div>
                    <div className="cot">
                      <div className="nme">{route.name}</div>
                      <div className="tot">Total value : <span>$10,845,94.00</span></div>
                    </div>
                  </li>
                ))}
              </ul>
              }
            </form>
          </div>
          <a href="" className="b"><span>Connect wallet</span><i className="fal fa-lock" /></a>
        </div>
      </div>
      <div className="bot">
        <ul>
          <li className="ac"><a href="/analytics/unicrypt">Overview</a></li>
          <li><a href="#">Liquidity</a></li>
          <li><a href="#">Price</a></li>
          <li><a href="#">Charts</a></li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderLayout;
