import React from "react";
import {
  IonMenu,
  IonContent,
  IonList,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonFooter,
  IonMenuToggle,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

export const Menu = ({ menuEnabled }) => {
  const history = useHistory();

  return (
    <IonMenu type="overlay" disabled={!menuEnabled} contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>The Water Exchange</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent forceOverscroll={false}>
        <IonMenuToggle autoHide={false}>
          <IonList style={{ paddingTop: 0 }}>
            <IonItem button onClick={() => history.push("/listings")}>
              <IonLabel>Available Listings</IonLabel>
            </IonItem>
            <IonItem button onClick={() => history.push("/my-listings")}>
              <IonLabel>My Listings</IonLabel>
            </IonItem>
            <IonItem button onClick={() => history.push("/incoming-offers")}>
              <IonLabel>Incoming Offers</IonLabel>
            </IonItem>
            <IonItem button onClick={() => history.push("/outgoing-offers")}>
              <IonLabel>Outgoing Offers</IonLabel>
            </IonItem>
            <IonItem button onClick={() => history.push("/account")}>
              <IonLabel>Account Management</IonLabel>
            </IonItem>
          </IonList>
        </IonMenuToggle>
      </IonContent>
      <IonFooter>
        <IonItem lines={false}>
          <IonLabel>© 2020 The Water Agency, Inc.</IonLabel>
        </IonItem>
      </IonFooter>
    </IonMenu>
  );
};
