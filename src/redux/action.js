import * as types from "./actionTypes";
import axios from "axios";

export const getCountries = () => (dispatch) => {
  dispatch({ type: types.GET_COUNTRY_REQUEST });
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((res) => {
      dispatch({ type: types.GET_COUNTRY_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_COUNTRY_FAILURE, payload: err.message });
    });
};
