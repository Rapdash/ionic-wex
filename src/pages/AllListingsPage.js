import React, { useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";

import { PageHeader } from "../components/PageHeader";
import { useSelector, useDispatch } from "react-redux";
import { loadAllListings } from "../state/listingSlice";

export const AllListingsPage = () => {
  const dispatch = useDispatch();
  const { listings, loading } = useSelector((state) => state.listing);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadAllListings());
  }, [dispatch]);

  const listingList = (listings) =>
    listings.map((listing) => (
      <IonItem>
        <IonLabel>
          {listing.volume} AF at ${listing.price}/AF{" "}
          <span className="ion-hide-sm-down">{listing.waterType}</span>
        </IonLabel>
        <IonButton style={{ paddingTop: 10, paddingBottom: 10 }} size="large">
          See Details
        </IonButton>
      </IonItem>
    ));

  return (
    <IonPage>
      <PageHeader title="All Listings" />
      <IonContent>
        <IonList style={{ paddingTop: 0 }}>{listingList(listings)}</IonList>
      </IonContent>
    </IonPage>
  );
};
