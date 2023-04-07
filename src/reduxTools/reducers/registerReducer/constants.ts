import { IRegisterState } from "./types";

const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
const REGISTRATION_FAILED = "REGISTRATION_FAILED";

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";

const defaultState: IRegisterState = {
  user: undefined,
  isRegistered: false,
  isActivated: false,
  favoritesPosts: [],
};

export {
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  defaultState,
};
