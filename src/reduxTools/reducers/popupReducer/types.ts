export type PopupImage = string | undefined;

export interface IPopupState {
  isOpen: boolean;
  image?: PopupImage;
}

export interface IPopupAction {
  type: string;
  image: PopupImage;
}
