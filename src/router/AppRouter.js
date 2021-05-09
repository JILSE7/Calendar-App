import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { nFound } from '../components/404/404';

import { loginScreen } from '../components/auth/loginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={CalendarScreen}/>
                    <Route exact path="/login" component={loginScreen}/>
                    <Route exact path="/register" component={RegisterScreen}/>

                    <Route exact path="/notFound" component={nFound}/>
                    <Redirect to="/notFound"/>
                </Switch>
            </div>
        </Router>
    )
}
