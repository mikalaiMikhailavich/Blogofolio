import { IPostAPI } from "../../../services/types/APIinterface";
import { IObjectStringList } from "../../../services/types/types";
import {
  GET_MY_POSTS_FAILED,
  GET_MY_POSTS_SUCCESS,
  defaultState,
  GET_MY_POSTS_COUNT,
} from "./constants";
import { IGetMyPostsState, IGetMyPostAction } from "./types";

const getMyPostsReducer = (
  state: IGetMyPostsState = defaultState,
  action: IGetMyPostAction
): IGetMyPostsState => {
  switch (action.type) {
    case GET_MY_POSTS_SUCCESS:
      return {
        ...state,
        myPosts: action.payload as IPostAPI[],
        errors: null,
      };
    case GET_MY_POSTS_FAILED:
      return {
        ...state,
        myPosts: [],
        errors: action.payload as IObjectStringList,
      };
    case GET_MY_POSTS_COUNT:
      return {
        ...state,
        totalMyPostsCount: action.payload as number,
      };

    default:
      return state;
  }
};

export default getMyPostsReducer;
