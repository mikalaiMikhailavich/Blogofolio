import { registerUser } from "../../../services/registerService/registerService";
import { IPostAPI } from "../../../services/types/APIinterface";
import { IObjectStringList } from "../../../services/types/types";
import { GlobalDispatch } from "../../store";
import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "./constants";
import { ILoadUserRegisterActionType, IUserType } from "./types";

const loadUserRegisterAction = (
  user: IUserType
): ILoadUserRegisterActionType => {
  return { type: REGISTRATION_SUCCESS, payload: user };
};

const errorRegistrationUserAction = (errors: IObjectStringList) => {
  return {
    type: REGISTRATION_FAILED,
    payload: errors,
  };
};

const registerUserAsyncAction = (
  username: string,
  email: string,
  password: string,
  cb: () => void
): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await registerUser(username, email, password);
    if (result.ok) {
      dispatch(loadUserRegisterAction(result.data as IUserType));
      cb();
    } else {
      dispatch(errorRegistrationUserAction(result.data));
      alert("incorrect name or password");
    }
  };
};

const addToFavoritesPostsAction = (post: IPostAPI) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: post,
  };
};
const deleteFromFavoritesPostsAction = (id: number) => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: id,
  };
};

export {
  registerUserAsyncAction,
  addToFavoritesPostsAction,
  deleteFromFavoritesPostsAction,
};
