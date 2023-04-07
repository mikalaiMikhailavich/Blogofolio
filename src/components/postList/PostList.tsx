import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPostListAsyncAction,
  loadTotalPostsCountAsyncAction,
} from "../../reduxTools/reducers/postListReducer/postListAction";
import PostListView from "../postListView/PostListView";
import Pagination from "../pagination/Pagination";
import {
  activeTabSelector,
  currentPageSelector,
  pageSizeSelector,
  postsSelector,
  totalPostsCountSelector,
} from "../../reduxTools/selectors.ts/selectors";

const PostList = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const postsPerPage = useSelector(pageSizeSelector);
  const posts = useSelector(postsSelector);
  const activeTab = useSelector(activeTabSelector);
  const totalPostsCount = useSelector(totalPostsCountSelector);

  const take = currentPage === 0 ? postsPerPage - 1 : postsPerPage;
  const skip = take * currentPage - 1;
  useEffect(() => {
    dispatch(loadTotalPostsCountAsyncAction());

    dispatch(loadPostListAsyncAction(take, skip));
  }, [take, skip, dispatch]);

  const mainPost = currentPage === 0 ? posts.slice(0, 1) : [];
  const secondaryPosts =
    currentPage === 0 ? posts.slice(1, 5) : posts.slice(0, 6);
  const tertiaryPosts =
    currentPage === 0 ? posts.slice(5, 11) : posts.slice(6, 12);
  // console.log("render posts");

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
        totalPostsCount={totalPostsCount}
        currentPage={currentPage}
      />
    </>
  );
};
export default PostList;
