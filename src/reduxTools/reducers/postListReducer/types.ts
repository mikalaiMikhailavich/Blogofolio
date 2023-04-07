import { IPostAPI } from "../../../services/types/APIinterface";
import { IBaseActionType } from "../../../services/types/types";

interface IPostsListState {
  posts: IPostAPI[];
  totalPostsCount: number;
  pageSize: number;
  post: IPostAPI;
}

interface IPostListGetPostsAction extends IBaseActionType {
  posts: IPostAPI[];
}
interface IPostListGetPostsCountAction extends IBaseActionType {
  totalPostsCount: number;
}

export type {
  IPostsListState,
  IPostListGetPostsAction,
  IPostListGetPostsCountAction,
};
