import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { useSelector, useDispatch } from "react-redux";
import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/react";

import { checkToken } from "./state/authSlice";
import { Menu } from "./components/Menu";
import { AllListingsPage } from "./pages/AllListingsPage";

export const App = () => {
  const { loading, loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu menuEnabled={loggedIn} />
          <IonRouterOutlet id="main">
            <Switch>
              {!loading && !loggedIn && <Redirect to="/login" />}
              <Route exact path="/login" component={() => <div>Login</div>} />
              <Route path="/all-listings" component={AllListingsPage} />
              <Route
                path="/my-listings"
                component={() => <div>My Listings</div>}
              />
              <Route
                path="/incoming-offers"
                component={() => <div>Incoming Offers</div>}
              />
              <Route
                path="/outgoing-offers"
                component={() => <div>Outgoing Offers</div>}
              />
              <Route path="/account" component={() => <div>Account</div>} />
              <Redirect exact from="/" to="/all-listings" />
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
