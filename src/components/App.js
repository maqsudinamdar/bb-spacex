import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import Header from './Header';

import SpaceXDashboard from '../pages/spacex/SpaceXDashboard'


const App = () => {
    
    return (
        <div>
            <Router history={history} >
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={SpaceXDashboard} /> 
                    </Switch>                   
                </div>
            </Router>
        </div>
    );
};


export default App;