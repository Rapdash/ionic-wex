import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

export const PageHeader = ({ title }) => (
  <IonHeader>
    <IonToolbar color="primary">
      <IonTitle>{title}</IonTitle>
      <IonButtons slot="end">
        <IonMenuButton />
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);
