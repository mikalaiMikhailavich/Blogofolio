import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import { getPostById } from "../../services/API/dataApi";
import { IPostAPI } from "../../services/types/APIinterface";
import styles from "./ContentPage.module.scss";

const ContentPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({} as IPostAPI);

  const postId = params.id;

  useEffect(() => {
    getPostById(postId).then((post: IPostAPI) => {
      setPost(post);
    });
  }, [postId]);

  return (
    <div>
      <div className={styles.navigationContainer}>
        <p className={styles.link} onClick={() => navigate("/")}>
          Home
        </p>
        <p>Post {post.id} </p>
      </div>
      {post && <Card post={post} variation="content" />}
    </div>
  );
};

export default ContentPage;
