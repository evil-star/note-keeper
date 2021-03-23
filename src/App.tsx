import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
