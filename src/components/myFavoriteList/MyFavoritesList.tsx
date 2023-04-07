import { useSelector } from "react-redux";
import {
  activeTabSelector,
  currentPageSelector,
  favoritesPostsSelector,
  pageSizeSelector,
} from "../../reduxTools/selectors.ts/selectors";
import Pagination from "../pagination/Pagination";
import PostListView from "../postListView/PostListView";

const MyFavoritesList = () => {
  const currentPage = useSelector(currentPageSelector);
  const postsPerPage = useSelector(pageSizeSelector);
  const activeTab = useSelector(activeTabSelector);

  const posts = useSelector(favoritesPostsSelector);

  const take = currentPage === 0 ? postsPerPage - 1 : postsPerPage;
  const skip = take * currentPage;

  const favoritesPosts = posts.slice(skip - 0.5, take + skip);

  const mainPost = currentPage === 0 ? favoritesPosts.slice(0, 1) : [];
  const secondaryPosts =
    currentPage === 0 ? posts.slice(1, 5) : favoritesPosts.slice(0, 6);
  const tertiaryPosts =
    currentPage === 0 ? posts.slice(5, 11) : favoritesPosts.slice(6, 12);

  return (
    <>
      <PostListView
        mainPost={mainPost}
        secondaryPosts={secondaryPosts}
        tertiaryPosts={tertiaryPosts}
      />
      <Pagination
        activeTab={activeTab}
        postsPerPage={postsPerPage}
        totalPostsCount={posts.length}
        currentPage={currentPage}
      />
    </>
  );
};
export default MyFavoritesList;
