import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Graphinq from './graphlinq';
import Unicrypt from './unicrypt';

interface PageProps {

}

const MainPage: React.FC<PageProps> = ({}) => {
    console.log('addddd')
        return (
            <div>
                {/* <Router> */}
                {/* <Switch>
                    <Route path="/analytics/graphlinq">
                        <Graphinq />
                    </Route>
                    <Route path="/analytics/unicrypt">
                        <Unicrypt />
                    </Route>
                </Switch>  */}
            {/* </Router> */}
            </div>
        );
}

export default MainPage;