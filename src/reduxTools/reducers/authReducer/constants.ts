import { IState } from "./types";

const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
const GET_TOKEN_FAILED = "GET_TOKEN_FAILED";
const GET_USER_DATA = "GET_USER_DATA";
const SIGN_OUT = "SIGN_OUT";
const defaultState: IState = {
  tokens: null,
  errors: null,
  user: null,
};

export {
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
  GET_USER_DATA,
  SIGN_OUT,
  defaultState,
};
