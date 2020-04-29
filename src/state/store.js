import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { listingReducer } from "./listingSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  listing: listingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
