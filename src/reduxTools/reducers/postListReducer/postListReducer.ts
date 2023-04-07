import { defaultState, GET_OVERALL_POSTS_COUNT, LOAD_POSTS } from "./constants";
import { IPostsListState } from "./types";

const postListReducer = (
  state: IPostsListState = defaultState,
  action: any
): IPostsListState => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };
    case GET_OVERALL_POSTS_COUNT:
      return {
        ...state,
        totalPostsCount: action.totalPostsCount,
      };

    default:
      return state;
  }
};

export default postListReducer;
