import { IActivate } from "./types";

const ACTIVATION_SUCCESS = "ACTIVATION_SUCCESS";
const ACTIVATION_FAILED = "ACTIVATION_FAILED";

const defaultState: IActivate = {
  isActivated: false,
  errors: null,
};

export { ACTIVATION_SUCCESS, ACTIVATION_FAILED, defaultState };
