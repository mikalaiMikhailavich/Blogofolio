import { IPostAPI } from "../../../services/types/APIinterface";
import {
  IBaseActionType,
  IObjectStringList,
} from "../../../services/types/types";

export interface IGetMyPostAction extends IBaseActionType {
  payload: IPostAPI[] | IObjectStringList | number;
}

export interface IGetMyPostsState {
  myPosts: IPostAPI[];
  errors: IObjectStringList | null;
  totalMyPostsCount: number;
}
