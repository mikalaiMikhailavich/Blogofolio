import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostListView from "../postListView/PostListView";
import Pagination from "../pagination/Pagination";
import {
  activeTabSelector,
  currentPageSelector,
  myPostsSelector,
  pageSizeSelector,
  totalMyPostsCountSelector,
} from "../../reduxTools/selectors.ts/selectors";
import { getMyPostsAsyncAction } from "../../reduxTools/reducers/getMyPosts/actions";
// debugger;
const MyPosts = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const postsPerPage = useSelector(pageSizeSelector);
  const activeTab = useSelector(activeTabSelector);
  const totalPostsCount = useSelector(totalMyPostsCountSelector);
  const myPosts = useSelector(myPostsSelector);
  console.log(totalPostsCount);

  const take = currentPage === 0 ? postsPerPage - 1 : postsPerPage;
  const skip = take * currentPage - 1;
  useEffect(() => {
    dispatch(getMyPostsAsyncAction(take, skip));
  }, [take, skip, dispatch]);

  const mainPost = currentPage === 0 ? myPosts.slice(0, 1) : [];
  const secondaryPosts =
    currentPage === 0 ? myPosts.slice(1, 5) : myPosts.slice(0, 6);
  const tertiaryPosts =
    currentPage === 0 ? myPosts.slice(5, 11) : myPosts.slice(6, 12);

  console.log(myPosts);

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
export default MyPosts;
