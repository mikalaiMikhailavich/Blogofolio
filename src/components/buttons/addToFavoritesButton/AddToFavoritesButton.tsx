import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoritesPostsAction,
  deleteFromFavoritesPostsAction,
} from "../../../reduxTools/reducers/registerReducer/actions";
import { favoritesPostsSelector } from "../../../reduxTools/selectors.ts/selectors";
import { IPostAPI } from "../../../services/types/APIinterface";
import styles from "./AddToFavoritesButton.module.scss";

const AddToFavoritesButton = (props: { post: IPostAPI }) => {
  const dispatch = useDispatch();
  const { post } = props;
  const favoritePosts = useSelector(favoritesPostsSelector);
  const id = post.id;

  const isFavoritePost = (favoritePostId: number) => {
    return favoritePosts.find((post) => post.id === favoritePostId);
  };

  const toogleFavoritesPosts = (post: IPostAPI) => {
    if (!isFavoritePost(id)) {
      dispatch(addToFavoritesPostsAction(post));
      console.log(favoritePosts);
    } else {
      dispatch(deleteFromFavoritesPostsAction(id));
    }
  };

  return (
    <div className={styles.container}>
      <svg
        className={
          !!isFavoritePost(id)
            ? `${styles.favoriteButton} ${styles.active}`
            : `${styles.favoriteButton}`
        }
        onClick={() => toogleFavoritesPosts(post)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 15C12.204 15 12.407 15.062 12.581 15.187L18 19.057V5C18 4.449 17.552 4 17 4H7C6.449 4 6 4.449 6 5V19.057L11.419 15.187C11.593 15.062 11.796 15 12 15ZM19 22C18.795 22 18.592 21.937 18.419 21.813L12 17.229L5.581 21.813C5.277 22.032 4.875 22.062 4.542 21.89C4.209 21.718 4 21.375 4 21V5C4 3.346 5.346 2 7 2H17C18.654 2 20 3.346 20 5V21C20 21.375 19.791 21.718 19.458 21.89C19.313 21.963 19.156 22 19 22Z"
          fill="#313037"
        />
      </svg>
    </div>
  );
};

export default AddToFavoritesButton;
