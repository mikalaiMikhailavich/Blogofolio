import {
  IBaseActionType,
  IObjectStringList,
  IUserState,
} from "../../../services/types/types";
import { IUserType } from "../registerReducer/types";

interface IState {
  tokens: TokenDto | null;
  errors: IObjectStringList | null;
  user: IUserState | null;
}

interface TokenDto {
  access: string;
  refresh: string;
}

export interface IAuthUserActionType extends IBaseActionType {
  payload: TokenDto | IObjectStringList | IUserType;
}

export type { IState, TokenDto };
