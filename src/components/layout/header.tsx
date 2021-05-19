import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import routes from '../../routes/sidebar';

interface HeaderLayoutProps {
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ }) => {
  let history = useHistory();
  let src = "";
  let title = "";
  const [isOpen, setIsOpen] = useState(false);

  function searchFunc(url: string) {
    history.push(url);
  }

  function onCloseMenu() {
    setTimeout(() => {
      setIsOpen(false);
    }, 250);
  }

  const location = useLocation()

  if (location.pathname === "/analytics/unicrypt") {
    src = '/template/img/unicrypt.svg';
    title = "Unicrypt";
  }
  if (location.pathname === "/analytics/graphlinq") {
    src = '/template/img/graphlinq.svg';
    title = "Graphliq";
  }

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
          <div className="illu"><img src={src} alt={title} /></div>
          <div className="tit">
            <h1>{title}</h1>
            <div className="pri">
              GLQ Price : <strong> 123342342 $US</strong>
            </div>
          </div>
        </div>
        <div className="r">
          <div id="sc">
            <form>
              <fieldset>
                <div data-search-res />
                <label htmlFor="scr">Search ...</label>
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
              </ul>}
            </form>
          </div>
          <a href="" className="b"><span>Connect wallet</span><i className="fal fa-lock" /></a>
        </div>
      </div>
      <div className="bot">
        <ul>
          <li className="ac"><a href="#">Section</a></li>
          <li><a href="#">Section</a></li>
          <li><a href="#">Section</a></li>
          <li><a href="#">Section</a></li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderLayout;