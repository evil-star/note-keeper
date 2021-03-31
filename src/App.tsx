import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthModal from "./components/AuthModal";
import RegModal from "./components/RegModal";
import Index from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>

			<AuthModal /> 
			<RegModal />
        </BrowserRouter>
    );
}

export default App;
