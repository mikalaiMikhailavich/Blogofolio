import styles from "./MainPage.module.scss";
import PostList from "../../components/postList/PostList";
import { Tabs } from "../../components/tabs/Tabs";
import MyFavoritesList from "../../components/myFavoriteList/MyFavoritesList";
import { useSelector } from "react-redux";
import { activeTabSelector } from "../../reduxTools/selectors.ts/selectors";
import MyPosts from "../../components/myPosts/MyPosts";

const MainPage = () => {
  let activeTab = useSelector(activeTabSelector);

  return (
    <div>
      <h1 className={styles.title}>Blog</h1>
      <Tabs />
      {activeTab === "All" && <PostList />}
      {activeTab === "My favorites" && <MyFavoritesList />}
      {activeTab === "My Posts" && <MyPosts />}
    </div>
  );
};

export default MainPage;
