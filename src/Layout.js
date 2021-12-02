import React from "react";
import reactDom from "react-dom";
import { BrowserRouter, Switch, Route  } from "react-router-dom"
import injectContext from "./Componentes/AppContent";

const Layout = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route>
                <App/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);