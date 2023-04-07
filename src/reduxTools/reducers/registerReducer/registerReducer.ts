import { IPostAPI } from "../../../services/types/APIinterface";
import { IObjectStringList } from "../../../services/types/types";
import {
  ADD_TO_FAVORITES,
  defaultState,
  DELETE_FROM_FAVORITES,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "./constants";
import {
  IRegisterState,
  ILoadUserRegisterActionType,
  IUserType,
} from "./types";

export const registerReducer = (
  state: IRegisterState = defaultState,
  action: ILoadUserRegisterActionType
): IRegisterState => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      const loadUser = action.payload as IUserType;
      return {
        ...state,
        isRegistered: true,
        user: loadUser,
        errors: undefined,
      };
    case REGISTRATION_FAILED:
      const errors = action.payload as IObjectStringList;
      return {
        ...state,
        isRegistered: false,
        user: undefined,
        errors: errors,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoritesPosts: [...state.favoritesPosts, action.payload as IPostAPI],
      };
    case DELETE_FROM_FAVORITES:
      const filterPosts = state.favoritesPosts.filter(
        (post) => post.id !== action.payload
      );
      return {
        ...state,
        favoritesPosts: [...filterPosts],
      };
    default:
      return state;
  }
};
