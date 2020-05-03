import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { useSelector, useDispatch } from "react-redux";
import { IonApp, IonSplitPane, IonRouterOutlet, IonPage } from "@ionic/react";

import { checkToken } from "./state/authSlice";
import { Menu } from "./components/Menu";
import { AllListings } from "./pages/AllListings";
import { MyListings } from "./pages/MyListings";

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
          <IonRouterOutlet id="main" animated={false}>
            <Switch>
              {!loading && !loggedIn && <Redirect to="/login" />}
              <Route exact path="/login" component={() => <div>Login</div>} />
              <Route exact path="/listings" component={AllListings} />
              <Route path="/my-listings" component={MyListings} />
              <Route
                path="/incoming-offers"
                component={() => <IonPage>Incoming Offers</IonPage>}
              />
              <Route
                path="/outgoing-offers"
                component={() => <div>Outgoing Offers</div>}
              />
              <Route path="/account" component={() => <div>Account</div>} />
              <Redirect exact from="/" to="/listings" />
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
