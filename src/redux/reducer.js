import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  countries: [],
  sort: "",
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: payload,
      };
    case types.GET_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
        countries: [],
      };
    case "GET_COUNTRY_SORTED":
      return {
        ...state,
        sort: payload,
      };
    default:
      return state;
  }
};
