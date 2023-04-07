import {
  IBaseActionType,
  IObjectStringList,
} from "../../../services/types/types";

export interface IResetPasswordAction extends IBaseActionType {
  payload?: null | IObjectStringList;
}

export interface IResetState {
  isReset: boolean;
  errors: IObjectStringList | null;
}
