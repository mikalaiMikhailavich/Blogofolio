import {
  getSearchPosts,
  getSearchPostsCount,
} from "../../../services/API/dataApi";
import { IPostAPI } from "../../../services/types/APIinterface";
import { GlobalDispatch, GlobalState } from "../../store";
import { GET_OVERALL_SEARCH_POSTS_COUNT, LOAD_SEARCH_POSTS } from "./constants";
import {
  ISearchPostsListGetPostsAction,
  ISearchPostsListGetPostsCountAction,
} from "./types";

const loadSearchPostsListAction = (
  posts: IPostAPI[]
): ISearchPostsListGetPostsAction => {
  return {
    type: LOAD_SEARCH_POSTS,
    posts,
  };
};

const loadSearchPostsListAsyncAction = (value: string, offset: number): any => {
  return (dispatch: GlobalDispatch) => {
    getSearchPosts(value, offset).then((posts) => {
      dispatch(loadSearchPostsListAction(posts));
      console.log(value);
    });
  };
};

const loadTotalSearchPostsCountAction = (
  totalSearchPostsCount: number
): ISearchPostsListGetPostsCountAction => {
  return {
    type: GET_OVERALL_SEARCH_POSTS_COUNT,
    totalSearchPostsCount,
  };
};

const loadTotalSearchPostsCountAsyncAction = (value: string): any => {
  return (dispatch: GlobalDispatch, state: GlobalState) => {
    getSearchPostsCount(value).then((totalPostsCount: number) =>
      dispatch(loadTotalSearchPostsCountAction(totalPostsCount))
    );
  };
};

export {
  loadSearchPostsListAction,
  loadSearchPostsListAsyncAction,
  loadTotalSearchPostsCountAction,
  loadTotalSearchPostsCountAsyncAction,
};
