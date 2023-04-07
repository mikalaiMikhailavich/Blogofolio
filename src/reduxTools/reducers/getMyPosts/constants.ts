import { IGetMyPostsState } from "./types";

const GET_MY_POSTS_SUCCESS = "ADD_MY_POSTS_SUCCESS";
const GET_MY_POSTS_FAILED = "ADD_MY_POSTS_FAILED";
const GET_MY_POSTS_COUNT = "GET_MY_POSTS_COUNT";
const defaultState: IGetMyPostsState = {
  myPosts: [],
  totalMyPostsCount: 0,
  errors: null,
};

export {
  GET_MY_POSTS_SUCCESS,
  GET_MY_POSTS_FAILED,
  GET_MY_POSTS_COUNT,
  defaultState,
};
