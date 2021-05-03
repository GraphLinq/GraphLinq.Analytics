import React, { useState, useEffect } from 'react'
import { NavLink, Route, useHistory } from 'react-router-dom';
import routes from '../../routes/sidebar';
import tabs from '../../routes/unicrypt';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { POST_SELECTED_UNCL, POST_SELECTED_UNCX, POST_TOTAL_LIQUIDITY, POST_LIQUIDITY } from '../../store/actionNames/glqAction';
import { Link } from '@chakra-ui/react';
import { SearchBar } from '../../components/SearchBar';
import { formatCur } from '../../utils';

interface UnicyptProps {
}

const HeaderLayout: React.FC<UnicyptProps> = ({ }) => {

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
              UNCX: <strong> {formatCur(uncxState.price, 2, 2)}</strong>
              {/* | UNCL: <strong> {formatCur(unclState.price, 2, 12)}</strong> */}
            </div>
          </div>
        </div>
        <div className="r">
          <SearchBar />
          <a href="" className="b"><span>Connect wallet</span><i className="fal fa-lock" /></a>
        </div>
      </div>
      <div className="bot">
        <ul>
          {tabs.map((tab: any) => (
            <li>
              <Link
                as={NavLink}
                exact
                to={tab.path}
                bgColor="#16132b"
                color="#b7aed6"
                _activeLink={{ bgColor: '#f20350', color: "#ffffff" }}
              >
                <Route path={tab.path} exact={tab.exact}></Route>
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default HeaderLayout;
