import {
  IBaseActionType,
  IObjectStringList,
} from "../../../services/types/types";

interface ILoadUserActivateActionType extends IBaseActionType {
  payload?: null | IObjectStringList;
}

interface IActivate {
  isActivated: boolean;
  errors: IObjectStringList | null;
}

export type { ILoadUserActivateActionType, IActivate };
