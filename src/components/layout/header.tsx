import React from 'react'

import routes from '../../routes/sidebar';
interface HeaderLayout {

}

const HeaderLayout: React.FC<HeaderLayout> = ({ }) => {

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
              <div className="illu"><img src="../../../template/img/unicrypt.svg" alt="Unicrypt" /></div>
              <div className="tit">
                <h1>Unicrypt</h1>
                <div className="pri">
                  GLQ Price : <strong>0.05 $US</strong>
                </div>
              </div>
            </div>
            <div className="r">
              <div id="sc">
                <form>
                  <fieldset>
                    <div data-search-res />
                    <label htmlFor="scr">Search token...</label>
                    <input id="scr" type="text" />
                  </fieldset>
                  <ul className="res">
                    {routes.map((route: any, index) => (
                        <li key={index}>
                          <div className="il">
                              <img src={route.imgSrc} alt={route.name} />
                            </div>
                            <div className="cot">
                              <div className="nme">{route.name}</div>
                              {/* <div className="tot">Total value : <span>$10,845,94.00</span></div> */}
                          </div>
                        </li>
                    ))}
                  </ul>
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
