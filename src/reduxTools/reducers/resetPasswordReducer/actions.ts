import { fetchNewPassword } from "../../../services/resetPassword/resetPassword";
import { IObjectStringList } from "../../../services/types/types";
import { GlobalDispatch } from "../../store";
import { RESET_FAILED, RESET_SUCCESS } from "./constants";
import { IResetPasswordAction } from "./types";

export const ResetSuccessAction = (): IResetPasswordAction => {
  return { type: RESET_SUCCESS };
};

export const ResetFailedAction = (
  errors: IObjectStringList
): IResetPasswordAction => {
  return { type: RESET_FAILED, payload: errors };
};

export const resetPasswordAsyncAction = (
  uid: string,
  token: string,
  password: string,
  cb: () => void
): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await fetchNewPassword(uid, token, password);
    if (result.ok) {
      dispatch(ResetSuccessAction());
      cb();
    } else {
      return;
    }
  };
};
