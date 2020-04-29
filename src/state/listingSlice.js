import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const listingSlice = createSlice({
  name: "listing",
  initialState: { listings: [], loading: true, error: null },
  reducers: {
    loadListingsSuccess: (_state, action) => {
      return {
        listings: action.payload,
        loading: false,
        error: null,
      };
    },
    loadListingsFailure: (_state, action) => ({
      listings: [],
      loading: false,
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
    console.log(res.data);
    dispatch(loadListingsSuccess(res.data));
  } catch {
    dispatch(loadListingsFailure());
  }
};
