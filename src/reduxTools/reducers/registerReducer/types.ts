import { IPostAPI } from "../../../services/types/APIinterface";
import {
  IBaseActionType,
  IObjectStringList,
} from "../../../services/types/types";

interface ILoadUserRegisterActionType extends IBaseActionType {
  payload: IUserType | IObjectStringList | IPostAPI | IPostAPI[] | number;
}

interface IUserType {
  username: string;
  email: string;
  id: number;
  favoritesPosts: IPostAPI[];
}

interface IRegisterState {
  isRegistered: boolean;
  user?: IUserType;
  errors?: IObjectStringList;
  isActivated: boolean;
  favoritesPosts: IPostAPI[];
}

export type { ILoadUserRegisterActionType, IUserType, IRegisterState };
