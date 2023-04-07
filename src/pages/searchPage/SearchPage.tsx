import React, { useEffect } from "react";
import styles from "./SearchPage.module.scss";
import { useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import { IPostAPI } from "../../services/types/APIinterface";
import Pagination from "../../components/pagination/Pagination";
import { GlobalState } from "../../reduxTools/store";
import { useSelector } from "react-redux";
import {
  loadSearchPostsListAsyncAction,
  loadTotalSearchPostsCountAsyncAction,
} from "../../reduxTools/reducers/searchPostsReducer/actions";
import { useDispatch } from "react-redux";

const totalSearchPostsCountSelector = (state: GlobalState) =>
  state.searchPostsList.totalSearchPostsCount;

const currentPageSelector = (state: GlobalState) =>
  state.pagination.currentPage;

const searchPostsSelector = (state: GlobalState) =>
  state.searchPostsList.searchPosts;

const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchText: string = location.state || "empty";
  const currentPage = useSelector(currentPageSelector);
  const searchPostsList = useSelector(searchPostsSelector);
  const totalSearchPostsCount = useSelector(totalSearchPostsCountSelector);
  const take = 10;
  const skip = take * currentPage;

  useEffect(() => {
    dispatch(loadSearchPostsListAsyncAction(searchText, skip));
    dispatch(loadTotalSearchPostsCountAsyncAction(searchText));
  }, [dispatch, searchText, skip]);
  console.log(totalSearchPostsCount);

  if (!searchPostsList.length) {
    return <h3> Your search - {searchText} - did not match any posts.</h3>;
  }

  return (
    <div className={styles.container}>
      <h2>Search results - {searchText}</h2>
      {searchPostsList.map((post: IPostAPI) => (
        <Card key={post.id} post={post} variation={"search"} />
      ))}
      <Pagination
        activeTab={"search"}
        postsPerPage={take}
        totalPostsCount={totalSearchPostsCount}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SearchPage;
