import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NoMatch from '@/pages/NoMatch';


class Routes extends Component {

	render() {

        console.info('router page');

        return (
            <Router>
                <Switch>
                    <Redirect exact path="/" to="/home/second" />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;