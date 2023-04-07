import { getAllPosts, getPostsCount } from "../../../services/API/dataApi";
import {
  getRandomMax,
  getRandomMin,
} from "../../../services/mathRandom/mathRandom";
import { IPostAPI } from "../../../services/types/APIinterface";
import { GlobalDispatch } from "../../store";
import { GET_OVERALL_POSTS_COUNT, LOAD_POSTS } from "./constants";
import { IPostListGetPostsAction, IPostListGetPostsCountAction } from "./types";

const loadPostListAction = (posts: IPostAPI[]): IPostListGetPostsAction => {
  return {
    type: LOAD_POSTS,
    posts,
  };
};

const loadPostListAsyncAction = (limit: number, offset: number): any => {
  return (dispatch: GlobalDispatch) => {
    getAllPosts(limit, offset).then((posts) => {
      const upgradePosts = posts.map((post: IPostAPI) => {
        return { ...post, likes: getRandomMax(), dislikes: getRandomMin() };
      });

      dispatch(loadPostListAction(upgradePosts));
    });
  };
};

const loadTotalPostsCountAction = (
  totalPostsCount: number
): IPostListGetPostsCountAction => {
  return {
    type: GET_OVERALL_POSTS_COUNT,
    totalPostsCount,
  };
};

const loadTotalPostsCountAsyncAction = (): any => {
  return (dispatch: GlobalDispatch) => {
    getPostsCount().then((totalPostsCount: number) => {
      dispatch(loadTotalPostsCountAction(totalPostsCount));
    });
  };
};

export {
  loadPostListAsyncAction,
  loadTotalPostsCountAction,
  loadTotalPostsCountAsyncAction,
};
