import { GlobalState } from "../store";

const getIsOpenMenuSelector = (state: GlobalState) => state.asideMenu.isOpen;
const userSelector = (state: GlobalState) => state.auth.user;
const favoritesPostsSelector = (state: GlobalState) =>
  state.register.favoritesPosts;
const getThemeSelector = (state: GlobalState) => state.theme;
const currentPageSelector = (state: GlobalState) =>
  state.pagination.currentPage;
const activeTabSelector = (state: GlobalState) => state.tabs.activeTab;

const pageSizeSelector = (state: GlobalState) => state.postList.pageSize;
const getPopupStateSelector = (state: GlobalState) => state.popup;

const postsSelector = (state: GlobalState) => state.postList.posts;

const totalPostsCountSelector = (state: GlobalState) =>
  state.postList.totalPostsCount;
const tabsSelector = (state: GlobalState) => state.tabs.tabs;
const getUserSelector = (state: GlobalState) => state.register.user;
const myPostsSelector = (state: GlobalState) => state.getMyPosts.myPosts;
const totalMyPostsCountSelector = (state: GlobalState) =>
  state.getMyPosts.totalMyPostsCount;

export {
  getIsOpenMenuSelector,
  userSelector,
  favoritesPostsSelector,
  getThemeSelector,
  currentPageSelector,
  activeTabSelector,
  pageSizeSelector,
  getPopupStateSelector,
  postsSelector,
  totalPostsCountSelector,
  tabsSelector,
  getUserSelector,
  myPostsSelector,
  totalMyPostsCountSelector,
};
