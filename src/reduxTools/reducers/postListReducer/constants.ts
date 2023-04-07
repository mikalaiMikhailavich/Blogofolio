import { IPostAPI } from "../../../services/types/APIinterface";
import { IPostsListState } from "./types";

const LOAD_POSTS = "LOAD_POSTS";
const GET_OVERALL_POSTS_COUNT = "GET_OVERALL_POSTS_COUNT";
const defaultState: IPostsListState = {
  posts: [],
  totalPostsCount: 0,
  post: {} as IPostAPI,
  pageSize: 12,
};

export { LOAD_POSTS, defaultState, GET_OVERALL_POSTS_COUNT };
