import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentPageAction } from "../../../reduxTools/reducers/paginationReducer/actions";
import styles from "./SearchButton.module.scss";

interface IProps {
  searchText: string;
}

export const SearchButton = (props: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchText } = props;

  const goToSearchPage = (searchText: string) => {
    dispatch(setCurrentPageAction(0));
    navigate("/search", { state: searchText });
  };

  return (
    <div
      className={styles.searchButtonContainer}
      onClick={() => goToSearchPage(searchText)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20L16 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
