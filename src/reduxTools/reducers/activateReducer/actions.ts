import { activateUser } from "../../../services/activateUser/activateUser";
import { IObjectStringList } from "../../../services/types/types";
import { GlobalDispatch } from "../../store";
import { ILoadUserActivateActionType } from "./types";

const activationSuccessAction = (): ILoadUserActivateActionType => {
  return { type: "ACTIVATION_SUCCESS" };
};

const activationFailedAction = (
  errors: IObjectStringList
): ILoadUserActivateActionType => {
  return { type: "ACTIVATION_FAILED", payload: errors };
};

export const activateUserAsyncAction = (
  uid: string,
  token: string,
  cb: () => void
): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await activateUser(uid, token);
    console.log("activation result :", result);

    if (result.ok) {
      dispatch(activationSuccessAction());
      cb();
    } else {
      dispatch(activationFailedAction(result.data));
    }
  };
};
