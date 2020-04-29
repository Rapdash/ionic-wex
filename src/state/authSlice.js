import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: { loggedIn: false, loading: true, user: null },
  reducers: {
    loadUserSuccess: (_state, action) => {
      return {
        loggedIn: true,
        loading: false,
        user: action.payload,
      };
    },
    loadUserFailure: (_state, _action) => ({
      loggedIn: false,
      loading: false,
      user: null,
    }),
  },
});

export const { loadUserFailure, loadUserSuccess } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const checkToken = () => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/user`, {
      headers: { Authorization: localStorage.getItem("auth_token") },
    });
    dispatch(loadUserSuccess(res.data));
  } catch {
    dispatch(loadUserFailure());
  }
};
