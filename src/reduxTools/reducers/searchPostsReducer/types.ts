import { IPostAPI } from "../../../services/types/APIinterface";
import { IBaseActionType } from "../../../services/types/types";

interface ISearchPostsListState {
  searchPosts: IPostAPI[];
  totalSearchPostsCount: number;
  pageSize: number;
  currentPage: number;
}

interface ISearchPostsListGetPostsAction extends IBaseActionType {
  posts: IPostAPI[];
}
interface ISearchPostsListGetPostsCountAction extends IBaseActionType {
  totalSearchPostsCount: number;
}

export type {
  ISearchPostsListState,
  ISearchPostsListGetPostsAction,
  ISearchPostsListGetPostsCountAction,
};
