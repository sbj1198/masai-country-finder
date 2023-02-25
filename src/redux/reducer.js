import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  countries: [],
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
    default:
      return state;
  }
};
