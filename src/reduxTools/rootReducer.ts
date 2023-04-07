import { combineReducers } from "redux";
import { popupReducer } from "./reducers/popupReducer/popupReducer";
import { themeReducer } from "./reducers/themeReducer/themeReducer";
import postListReducer from "./reducers/postListReducer/postListReducer";
import { registerReducer } from "./reducers/registerReducer/registerReducer";
import { asideMenuReducer } from "./reducers/asideMenuReducer/asideMenuReducer";
import { paginationReducer } from "./reducers/paginationReducer/paginationReducer";
import tabReducer from "./reducers/tabReducer/tabReducer";
import { activatedReducer } from "./reducers/activateReducer/activateReducer";
import { authReducer } from "./reducers/authReducer/authReducer";
import searchPostsListReducer from "./reducers/searchPostsReducer/searchPostsReducer";
import getMyPostsReducer from "./reducers/getMyPosts/getMyPostsReducer";
import { resetPasswordReducer } from "./reducers/resetPasswordReducer/resetPasswordReducer";
export const rootReducer = combineReducers({
  theme: themeReducer,
  popup: popupReducer,
  postList: postListReducer,
  register: registerReducer,
  asideMenu: asideMenuReducer,
  pagination: paginationReducer,
  tabs: tabReducer,
  activate: activatedReducer,
  auth: authReducer,
  searchPostsList: searchPostsListReducer,
  getMyPosts: getMyPostsReducer,
  resetPassword: resetPasswordReducer,
});
