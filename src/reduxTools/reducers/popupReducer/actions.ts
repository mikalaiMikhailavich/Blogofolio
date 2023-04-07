import { CLOSE_POPUP, OPEN_POPUP } from "./constants";
import { IPopupAction, PopupImage } from "./types";

export const closePopupAction = (): IPopupAction => {
  return {
    type: CLOSE_POPUP,
    image: undefined,
  };
};

export const openPopupAction = (image: PopupImage): IPopupAction => {
  return {
    type: OPEN_POPUP,
    image: image,
  };
};
