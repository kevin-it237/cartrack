import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import PrivateRoute from './private.route';
import NormalRoute from './normal.route';

import AuthScreen from '../../applications/auth/pages/auth.screen/auth'
import Tracker from '../../applications/tracker/pages/tracker'

/**
 * @description this is the main routes for the main application src/app. 
 */
const Routes = () => {

    return (
        <Switch>
            {/* Private routes here */}
            <PrivateRoute exact path={"/"}>
                <Route 
                    exact 
                    component={Tracker}
                    path={"/"} />
            </PrivateRoute>
            
            {/* Normal routes here */}
            <NormalRoute exact>
                <Route 
                    exact
                    component={AuthScreen}
                    path={'/auth'} />
            </NormalRoute>

        </Switch>)
}

const mapStateToProps = () =>({
});

export default connect(mapStateToProps)(Routes);
