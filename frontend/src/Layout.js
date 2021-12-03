import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/AppContent';
import Login from './views/Login';



const Layout = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />    
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);