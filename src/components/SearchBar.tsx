import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import routes from "../routes/sidebar";
import {
  POST_SELECTED_GLQ,
  POST_SELECTED_UNCX,
} from "../store/actionNames/glqAction";
import { RootState } from "../store/reducers";
import { formatCur } from "../utils";

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
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
  const uncxState = useSelector((state: RootState) => state.uncxSelect || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState });
    dispatch({ type: POST_SELECTED_UNCX, payLoad: uncxState });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function marketCap(project: string) {
    if (project === "GraphLinq") {
      return formatCur(glqState.market_cap, 0, 0);
    } else if (project === "Unicrypt") {
      return formatCur(uncxState.market_cap, 0, 0);
    } else if (project === "Polygon") {
      return "Coming Soon...";
    }
    return 0;
  }

  return (
    <div id="sc" className={isOpen ? "open" : ""}>
      <form autoComplete="off">
        <fieldset>
          <label htmlFor="scr">Search token...</label>
          <input
            id="scr"
            type="text"
            onFocus={() => setIsOpen(true)}
            onBlur={() => onCloseMenu()}
          />
        </fieldset>
        {isOpen && (
          <ul className="res">
            {routes.map((route: any, index) => (
              <li key={index} onClick={() => searchFunc(route.path)}>
                <div className="il">
                  <img src={route.imgSrc} alt={route.name} />
                </div>
                <div className="cot">
                  <div className="nme">{route.name}</div>
                  <div className="tot">
                    Market Cap : <span>{marketCap(route.name)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};
