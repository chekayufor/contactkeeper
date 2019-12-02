import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './components/context/contact/contactState';
import AuthState from './components/context/auth/AuthState';
import AlertState from './components/context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <AlertState>
                    <Router>
                        <Fragment className='App'>
                            <NavBar />
                            <div className='container'>
                                <Alert />
                                <Switch>
                                    <PrivateRoute exact path='/' component={Home} />
                                    <Route exact path='/about' component={About} />
                                    <Route exact path='/register' component={Register} />
                                    <Route exact path='/login' component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </ContactState>
        </AuthState>
    )
}
export default App;