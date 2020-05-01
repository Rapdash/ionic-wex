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
import { useHistory } from "react-router-dom";

export const AllListingsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { listings, loading, initialLoadComplete } = useSelector(
    (state) => state.listing
  );
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!initialLoadComplete) {
      dispatch(loadAllListings());
    }
  }, [dispatch, initialLoadComplete]);

  const listingList = (listings) =>
    listings.map((listing) => (
      <IonItem
        button
        key={listing.id}
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/listings/${listing.id}`)}
      >
        <IonLabel style={{ paddingTop: 10, paddingBottom: 10 }}>
          {listing.volume} AF at ${listing.price}/AF | {listing.waterType}{" "}
          <span className="ion-hide-sm-down">
            {" "}
            |{" "}
            {listing.partialOk
              ? "Minimum Volume: " + listing.minVolume + " AF"
              : "No Partial Volume Offers"}
          </span>
        </IonLabel>
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
