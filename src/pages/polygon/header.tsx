import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../store/reducers';
import { NavLink, Route } from "react-router-dom";
import tabs from "../../routes/polygon";
import { Link } from "@chakra-ui/react";
import { SearchBar } from "../../components/SearchBar";

interface HeaderLayoutProps {}

const HeaderLayout: React.FC<HeaderLayoutProps> = () => {
  //const dispatch = useDispatch();
  //const glqState = useSelector((state: RootState) => state.glqSelect || {});

  //useEffect(() => {
  //  dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
  //}, [])

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
          <div className="illu">
            <img src="/template/img/polygon-small.svg" alt="polygon" />
          </div>
          <div className="tit">
            <h1>Polygon</h1>
            <div className="pri">
              MATIC : <strong>Coming Soon...</strong>
            </div>
          </div>
        </div>
        <div className="r">
          <SearchBar />
          <button className="b">
            <span>Connect wallet</span>
            <i className="fal fa-lock" />
          </button>
        </div>
      </div>
      <div className="bot">
        <ul>
          {tabs.map((tab: any, index: number) => (
            <li key={index}>
              <Link
                as={NavLink}
                exact
                to={tab.path}
                bgColor="#16132b"
                color="#b7aed6"
                _activeLink={{ bgColor: "#f20350", color: "#ffffff" }}
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
};

export default HeaderLayout;
