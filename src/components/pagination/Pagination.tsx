import { useDispatch } from "react-redux";
import {
  setCurrentPageAction,
  setNextPage,
  setPreviouslyPage,
} from "../../reduxTools/reducers/paginationReducer/actions";
import styles from "./Pagination.module.scss";

interface IProps {
  activeTab: string;
  postsPerPage: number;
  totalPostsCount: number;
  currentPage: number;
  loadCurrentPage?: (page: number) => void;
  loadPreviousPage?: (page: number) => void;
  loadNextPage?: (page: number) => void;
}

const Pagination = (props: IProps) => {
  const { totalPostsCount, postsPerPage, currentPage = 0 } = props;
  const dispatch = useDispatch();

  let totalPages = Math.round((totalPostsCount - 11) / postsPerPage);

  //
  const pages: number[] = [];

  for (let i = 0; i <= totalPages; i++) {
    pages.push(i);
  }

  const loadCurrentPage = (page: number) => {
    dispatch(setCurrentPageAction(page));
  };

  const loadPreviousPage = (page: number) => {
    dispatch(setPreviouslyPage(page));
  };

  const loadNextPage = (page: number) => {
    dispatch(setNextPage(page));
  };

  if (!totalPostsCount) {
    return null;
  }

  return (
    <div className={styles.container}>
      <input
        type={"button"}
        value={"<  Prev"}
        disabled={currentPage === 0 ? true : false}
        className={styles.button}
        onClick={() => loadPreviousPage(currentPage)}
      />

      <div className={styles.pagesContainer}>
        {pages.map((page: number) => (
          <span
            key={page}
            className={
              currentPage === page
                ? `${styles.pageNumber} ${styles.active}`
                : styles.pageNumber
            }
            onClick={() => loadCurrentPage(page)}
          >
            {page + 1}
          </span>
        ))}
      </div>
      <input
        type={"button"}
        value={"Next  >"}
        disabled={currentPage === totalPages ? true : false}
        className={styles.button}
        onClick={() => loadNextPage(currentPage)}
      />
    </div>
  );
};

export default Pagination;
