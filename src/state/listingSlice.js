import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const listingSlice = createSlice({
  name: "listing",
  initialState: {
    listings: [],
    loading: true,
    error: null,
    initialLoadComplete: false,
  },
  reducers: {
    loadListingsSuccess: (_state, action) => {
      return {
        listings: action.payload,
        loading: false,
        initialLoadComplete: true,
        error: null,
      };
    },
    loadListingsFailure: (_state, action) => ({
      listings: [],
      loading: false,
      initialLoadComplete: false,
      error: action.payload,
    }),
  },
});

export const {
  loadListingsSuccess,
  loadListingsFailure,
} = listingSlice.actions;

export const listingReducer = listingSlice.reducer;

export const loadAllListings = () => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/listing`, {
      headers: { Authorization: localStorage.getItem("auth_token") },
    });
    dispatch(loadListingsSuccess(res.data));
  } catch {
    dispatch(loadListingsFailure());
  }
};
