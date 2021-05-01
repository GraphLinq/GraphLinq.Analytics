import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { POST_SELECTED_GLQ } from '../../store/actionNames/glqAction';
import { RootState } from '../../store/reducers';

import { NavLink, Route, useHistory } from 'react-router-dom';
import routes from '../../routes/sidebar';
import tabs from '../../routes/graphlinq';
import { Link } from '@chakra-ui/react';

interface HeaderLayoutProps {
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ }) => {
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
  const glqState = useSelector((state: RootState) => state.glqSelect || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
  }, [])
  // console.log("Graphliq content glqState::", glqState)

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
          <div className="illu"><img src="/template/img/graphlinq.svg" alt="graphliq" /></div>
          <div className="tit">
            <h1>Graphliq</h1>
            <div className="pri">
              GLQ : <strong>${parseFloat(glqState.price).toFixed(12)}</strong>
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
