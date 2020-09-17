import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Final from "./pages/Final";
import Main from "./pages/Main";

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Main} />
            <Route path="/final" component={Final} />
        </BrowserRouter>
    );
}

export default Routes;
