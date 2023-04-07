import React from "react";
import { IPostAPI } from "../../services/types/APIinterface";
import Card from "../card/Card";
import styles from "./PostListView.module.scss";

interface IProps {
  mainPost: IPostAPI[];
  secondaryPosts: IPostAPI[];
  tertiaryPosts: IPostAPI[];
}

const PostListView = (props: IProps) => {
  const { mainPost, secondaryPosts, tertiaryPosts } = props;

  return (
    <div className={styles.container}>
      <div className={styles.mainAndSecondaryContainer}>
        {mainPost.map((post: IPostAPI) => (
          <Card key={post.id} post={post} variation={"primary"} />
        ))}
        <div className={styles.secondaryContainer}>
          {secondaryPosts.map((post: IPostAPI) => (
            <Card key={post.id} post={post} variation={"secondary"} />
          ))}
        </div>
      </div>
      <div className={styles.asideContainer}>
        {tertiaryPosts.map((post: IPostAPI) => (
          <Card key={post.id} post={post} variation={"tertiary"} />
        ))}
      </div>
    </div>
  );
};

export default PostListView;
