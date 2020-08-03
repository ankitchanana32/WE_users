import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIN from './Components/LogIn';
import AllUsers from './Components/AllUsers';
import store from './Store'
import { Provider } from 'react-redux';
import PrivateRoute from "./PrivateRoute";

import UserDetail from './Components/UserDetail';

const Routes = () => {
    return (
        <Provider store={store}>
            <Router>
                <div >
                    <Switch>

                        <Route exact path="/" component={LogIN} />
                        <PrivateRoute path="/AllUsers" store = {store} component={AllUsers} />
                        <PrivateRoute path="/users/:id" store = {store} component={UserDetail} />

                    </Switch>
                </div>
            </Router>
        </Provider>
    )

}

export default Routes;