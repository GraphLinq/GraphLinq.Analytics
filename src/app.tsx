import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { useActiveWeb3React } from "./hooks";
import Web3ReactManager from "./web3/web3Manager";
import LayoutIndex from "./components/layout/index"
import GraphLinq from "./pages/graphlinq";
import Unicrypt from "./pages/unicrypt";
//import Polygon from "./pages/polygon";
import GraphLinqSoon from "./pages/graphlinq/soon";
import UnicryptSoon from "./pages/unicrypt/soon";
import PolygonSoon from "./pages/polygon/soon";

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
        <LayoutIndex>
          <Switch>
            <Redirect exact from="/" to="/analytics/graphlinq" />
            <Route exact path="/analytics/graphlinq" component={GraphLinq} />
            <Route exact path="/analytics/unicrypt" component={Unicrypt} />
            <Route path="/analytics/graphlinq" component={GraphLinqSoon} />
            <Route path="/analytics/unicrypt" component={UnicryptSoon} />
            <Route path="/analytics/polygon" component={PolygonSoon} />
          </Switch>
        </LayoutIndex>
      </Web3ReactManager>
    </Router>
  );
};

export default AppWrapper;
