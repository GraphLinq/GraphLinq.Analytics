import React, { lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { useActiveWeb3React } from "./hooks";
import Web3ReactManager from "./web3/web3Manager";
import LayoutIndex from "./layout/index"

const AppWrapper = () => {

  useActiveWeb3React();

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App: React.FC = () => {
  return (
    <Router>
        <Web3ReactManager>
          <Switch>
            <Route path="/" component={LayoutIndex} />
          </Switch>
        </Web3ReactManager>
    </Router>
  );
};

export default AppWrapper;
