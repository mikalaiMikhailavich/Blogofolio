import { IPostAPI } from "./APIinterface";

interface IObjectStringList {
  [key: string]: string[];
}

interface IBaseActionType {
  type: string;
}

interface IUserState {
  username: string;
  id: number;
  email: string;
  myPosts?: IPostAPI[];
}

export type { IObjectStringList, IBaseActionType, IUserState };
