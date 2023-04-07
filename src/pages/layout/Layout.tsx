import Header from "../../components/header/Header";

import "../../App.css";
import { Footer } from "../../components/footer/Footer";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getThemeSelector } from "../../reduxTools/selectors.ts/selectors";

const Layout = () => {
  const themeColor = useSelector(getThemeSelector);

  return (
    <div
      className={`app ${
        themeColor.themeColor === "light" ? "light-theme" : "dark-theme"
      }`}
    >
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
