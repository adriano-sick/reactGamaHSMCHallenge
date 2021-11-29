import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import CriarCurso from "./views/CriarCurso";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/criarcurso" exact component={CriarCurso} />
            </Switch>
        </ BrowserRouter>
    );
}
export default Routes;