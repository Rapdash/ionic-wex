import React, { useEffect } from "react";
import { IonApp } from "@ionic/react";
import { checkToken } from "./state/authSlice";
import { useSelector, useDispatch } from "react-redux";

export const App = () => {
  const { loading, user, loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(loggedIn);
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);
  return <IonApp />;
};
