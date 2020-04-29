import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { useSelector, useDispatch } from "react-redux";
import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/react";

import { checkToken } from "./state/authSlice";
import { Menu } from "./components/Menu";

export const App = () => {
  const { loading, user, loggedIn } = useSelector((state) => state.auth);
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
            <Route path="/listings" component={() => <div>Listings</div>} />
            <Route path="/login" component={() => <div>login</div>} />
            <Redirect exact from="/" to="/listings" />
            {!loading && !loggedIn && <Redirect to="/login" />}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
