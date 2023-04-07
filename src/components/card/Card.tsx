import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openPopupAction } from "../../reduxTools/reducers/popupReducer/actions";
import { PopupImage } from "../../reduxTools/reducers/popupReducer/types";
import { activeTabSelector } from "../../reduxTools/selectors.ts/selectors";
import formatDate from "../../services/formatDate/formatDate";
import { IPostAPI } from "../../services/types/APIinterface";
import AddToFavoritesButton from "../buttons/addToFavoritesButton/AddToFavoritesButton";
import DislikeButton from "../buttons/dislikeButton/DislikeButton";
import LikeButton from "../buttons/likeButton/LikeButton";
import MoreButton from "../buttons/moreButton/MoreButton";
import Popup from "../popup/Popup";
import styles from "./Card.module.scss";

const Card = (props: { post: IPostAPI; variation: string }) => {
  const activeTab = useSelector(activeTabSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const idpost = params.id;
  const {
    post: { id, date, title, text, image, likes, dislikes },
    variation,
  } = props;

  const navigateToContentPage = (idpost: string | undefined, id: number) => {
    if (!idpost) {
      navigate(`/posts/${id}`);
    }
  };
  const formattedDate = formatDate(date);

  const handleOpenPopup = (image: PopupImage, e: any) => {
    e.stopPropagation();
    dispatch(openPopupAction(image));
  };

  return (
    <div className={`${styles.container} ${styles[variation]}`}>
      <div
        onClick={() => navigateToContentPage(idpost, id)}
        className={styles.contentContainer}
      >
        <div className={styles.textAndTitleContainer}>
          <p className={styles.date}>{formattedDate}</p>

          <h5 className={styles.title}>{title}</h5>
          {variation === "content" ? <img src={image} alt={text} /> : null}
          <p className={styles.text}>{text}</p>
        </div>

        {variation === "content" ? null : (
          <img
            src={image}
            alt={text}
            onClick={(e) => handleOpenPopup(image, e)}
          />
        )}
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.likeAndDislikeContainer}>
          <LikeButton likes={likes} />
          <DislikeButton dislikes={dislikes} />
        </div>
        <div className={styles.favoritesButtonContainer}>
          <AddToFavoritesButton post={props.post} />
          <MoreButton id={id} activeTab={activeTab} />
        </div>
      </div>
      <Popup />
    </div>
  );
};

export default Card;
