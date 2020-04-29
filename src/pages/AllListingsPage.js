import React from "react";
import { IonPage, IonContent, IonList, IonItem } from "@ionic/react";

import { PageHeader } from "../components/PageHeader";
import { useSelector } from "react-redux";

export const AllListingsPage = () => {
  const {} = useSelector((state) => state.listing);
  const { user } = useSelector((state) => state.auth);
  return (
    <IonPage>
      <PageHeader title="All Listings" />
      <IonContent>
        <IonList>
          <IonItem></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
