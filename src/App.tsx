import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  setAccessTokenCookie,
  signOut,
} from "synapse-react-client/dist/utils/SynapseClient";
import "./App.scss";
import AppInitializer from "./AppInitializer";
import { OAuth2Form } from "./OAuth2Form";
import { getURLParam } from "./URLUtils";
import Versions from "./Versions";

const App: React.FC = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  return (
    <div className="App">
      <Router>
        <AppInitializer>
          <Switch>
            <Route exact path="/" render={() => <OAuth2Form />} />
            <Route
              exact
              path="/logout"
              render={() => {
                signOut(() => {
                  setIsLoggedOut(true);
                });
                return (
                  <p style={{ margin: 10 }}>
                    {isLoggedOut ? "Logged" : "Logging"} out
                  </p>
                );
              }}
            />
            <Route
              exact
              path="/login"
              render={() => {
                // look for the code from the params
                const code = getURLParam("code");
                setAccessTokenCookie(code, () => {
                  setIsLoggedOut(false);
                });
                return (
                  <p style={{ margin: 10 }}>
                    {isLoggedOut ? "Logging" : "Logged"} in
                  </p>
                );
              }}
            />
          </Switch>
        </AppInitializer>
        <Versions />
      </Router>
    </div>
  );
};
export default App;
