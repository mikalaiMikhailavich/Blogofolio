import { createMyNewPost } from "../../../services/createMyNewPost/createMyNewPost";
import { deleteMyPost } from "../../../services/deleteMyPost/deleteMyPost";
import { editMyPost } from "../../../services/editPost/editPost";
import { getMyPosts } from "../../../services/getMyPosts/getMyPosts";
import { IPostAPI } from "../../../services/types/APIinterface";
import { IObjectStringList } from "../../../services/types/types";
import { GlobalDispatch, GlobalState } from "../../store";
import { refreshTokenAsyncAction } from "../authReducer/actions";
import {
  GET_MY_POSTS_COUNT,
  GET_MY_POSTS_FAILED,
  GET_MY_POSTS_SUCCESS,
} from "./constants";
import { IGetMyPostAction } from "./types";

export const addPostsSuccessAction = (posts: IPostAPI[]): IGetMyPostAction => ({
  type: GET_MY_POSTS_SUCCESS,
  payload: posts,
});

export const addPostsFailedAction = (
  errors: IObjectStringList
): IGetMyPostAction => ({
  type: GET_MY_POSTS_FAILED,
  payload: errors,
});

export const addMyPostsCountAction = (totalCount: number) => {
  return {
    type: GET_MY_POSTS_COUNT,
    payload: totalCount,
  };
};

export const getMyPostsCountAsyncAction = (
  limit: number,
  offset: number
): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;

    if (!accessToken) {
      throw new Error("no Access Token");
    }
    const result = await getMyPosts(accessToken, limit, offset);
    if (result.ok) {
      console.log(result.data.count);

      dispatch(addMyPostsCountAction(result.data.count));
      dispatch(addPostsSuccessAction(result.data.results));
      console.log(result.data);
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      await dispatch(getMyPostsAsyncAction(limit, offset));
    } else {
      console.log(result.data);
      throw new Error(result.data);
    }
  };
};

export const getMyPostsAsyncAction = (limit: number, offset: number): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;

    if (!accessToken) {
      throw new Error("no Access Token");
    }
    const result = await getMyPosts(accessToken, limit, offset);
    if (result.ok) {
      dispatch(addMyPostsCountAction(result.data.count));

      dispatch(addPostsSuccessAction(result.data.results));

      console.log(result.data);
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      await dispatch(getMyPostsAsyncAction(limit, offset));
    } else {
      console.log(result.data);
      throw new Error(result.data);
    }
  };
};

export const createMyNewPostAsyncAction = (formData: FormData): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;
    if (!accessToken) {
      throw new Error("no Access Token");
    }
    const result = await createMyNewPost(formData, accessToken);
    if (result.ok) {
      console.log(result.data.id);
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      console.log("refreshToken");
      await dispatch(createMyNewPostAsyncAction(formData));
    } else {
      console.log(result.data);
      throw new Error(result.data);
    }
  };
};

export const editMyPostAsyncAction = (formData: FormData, id: number): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;
    if (!accessToken) {
      throw new Error("no Access Token");
    }
    const result = await editMyPost(formData, accessToken, id);
    console.log(result);

    if (result.ok) {
      console.log(result.data.id);
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      console.log("refreshToken");
      await dispatch(editMyPostAsyncAction(formData, id));
    } else {
      console.log(result.data);
      throw new Error(result.data);
    }
  };
};

export const deleteMyPostAsyncAction = (id: number): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;
    if (!accessToken) {
      throw new Error("no Access Token");
    }
    const result = await deleteMyPost(accessToken, id);
    console.log(result);

    if (result.ok) {
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      console.log("refreshToken");
      await dispatch(deleteMyPostAsyncAction(id));
    } else {
    }
  };
};
