import {
  fetchRefreshToken,
  getTokensUser,
  getUserData,
} from "../../../services/auth/auth";
import {
  IBaseActionType,
  IObjectStringList,
  IUserState,
} from "../../../services/types/types";
import { GlobalDispatch, GlobalState } from "../../store";
import {
  GET_TOKEN_FAILED,
  GET_TOKEN_SUCCESS,
  GET_USER_DATA,
  SIGN_OUT,
} from "./constants";
import { IAuthUserActionType, TokenDto } from "./types";

const getTokensSuccessAction = (tokens: TokenDto): IAuthUserActionType => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload: tokens,
  };
};

const getTokensFailedAction = (
  errors: IObjectStringList
): IAuthUserActionType => {
  return {
    type: GET_TOKEN_FAILED,
    payload: errors,
  };
};

const getTokensAsyncAction = (email: string, password: string): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await getTokensUser(email, password);

    if (result.ok) {
      dispatch(getTokensSuccessAction(result.data as TokenDto));
    } else {
      dispatch(signOutAction());
      dispatch(getTokensFailedAction(result.data as IObjectStringList));
    }
  };
};

const refreshTokenAsyncAction = (): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const refreshToken = getState().auth.tokens?.refresh;
    if (!refreshToken) {
      console.log("No refreshToken");
      throw new Error("no refresh token");
    }

    const result = await fetchRefreshToken(refreshToken);
    if (result.ok) {
      dispatch(
        getTokensSuccessAction({
          access: result.data.access,
          refresh: refreshToken,
        })
      );
    }
  };
};

const getUserDataAction = (userData: IUserState) => {
  return {
    type: GET_USER_DATA,
    payload: userData,
  };
};

const getUserDataAsyncAction = (email: string, password: string): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const userData = getState().auth.user?.username;
    let refreshToken = getState().auth.tokens?.refresh;
    let accessToken = getState().auth.tokens?.access;
    // debugger;
    if (!refreshToken) {
      console.log("otrabotal 1 if");
      await dispatch(getTokensAsyncAction(email, password));
      await dispatch(getUserDataAsyncAction(email, password));

      if (refreshToken) {
        await dispatch(getUserDataAsyncAction(email, password));
      } else {
        return;
      }
      return;
    } else if (!accessToken) {
      console.log("otrabotal 2 if");
      await dispatch(refreshTokenAsyncAction());
      await dispatch(getUserDataAsyncAction(email, password));
    } else if (userData === undefined) {
      const result = await getUserData(accessToken!);
      dispatch(getUserDataAction(result.data));
      console.log("otrabotal 3 if");
    }
  };
};

const signOutAction = (): IBaseActionType => {
  return {
    type: SIGN_OUT,
  };
};

export {
  getTokensAsyncAction,
  signOutAction,
  getUserDataAsyncAction,
  refreshTokenAsyncAction,
};
