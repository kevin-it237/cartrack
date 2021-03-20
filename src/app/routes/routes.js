import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import PrivateRoute from './private.route';
import NormalRoute from './normal.route';

import Layout from '../components/layout/layout'
import AuthScreen from '../../applications/auth/pages/auth.screen/auth'
import UserProfile from '../../applications/auth/pages/auth.profile/auth.profile'
import ResetPassword from '../../applications/auth/pages/auth.profile/auth.resetpassword.jsx'
import Tracker from '../../applications/tracker/pages/tracker'

/**
 * @description this is the main routes for the main application src/app. 
 */
const Routes = () => {

    return (
        <Switch>
            {/* Private routes here */}
            <PrivateRoute exact path={"/"}>
            <Layout>
                <Route 
                    exact 
                    component={Tracker}
                    path={"/"} />
            </Layout>
            </PrivateRoute>
            
            {/* Normal routes here */}
            <NormalRoute exact>
                <Route 
                    exact
                    component={AuthScreen}
                    path={'/auth'} />
                
                <Layout>
                    <Route 
                        exact
                        component={UserProfile}
                        path={'/profile'} />
                    <Route 
                        exact
                        component={ResetPassword}
                        path={'/reset'} />
                    <Route 
                        exact
                        component={Tracker}
                        path={'/tracker'} />
                </Layout>
            </NormalRoute>

        </Switch>)
}

const mapStateToProps = () =>({
});

export default connect(mapStateToProps)(Routes);
