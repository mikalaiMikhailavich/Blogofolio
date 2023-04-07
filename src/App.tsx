import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./pages/signUpForm/SignUpForm";
import SignInForm from "./pages/signInForm/SignInForm";
import ResetPasswordForm from "./pages/resetPasswordForm/ResetPasswordForm";
import NewPasswordForm from "./pages/newPasswordForm/NewPasswordForm";
import Layout from "./pages/layout/Layout";
import NotFound from "./pages/notFound/NotFound";
import MainPage from "./pages/mainPage/MainPage";
import ContentPage from "./pages/contentPage/ContentPage";
import SearchPage from "./pages/searchPage/SearchPage";
import RequireAuth from "./hoc/RequireAuth";
import CreatePost from "./pages/createPost/CreatePost";
import Activation from "./pages/activation/Activation";
import Success from "./pages/success/Success";
import GetUser from "./pages/getUser/GetUser";
import ConfirmRegistration from "./pages/confirmRegistration/ConfirmRegistration";
import EditPost from "./pages/editPost/EditPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="all" element={<MainPage />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route
          path="createpost"
          element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          }
        />

        <Route path="editpost" element={<EditPost />} />
        <Route path="success" element={<Success />} />
        <Route path="activate/:uid/:token" element={<Activation />} />
        <Route path="newpassword/:uid/:token" element={<NewPasswordForm />} />
        <Route path="resetpassword" element={<ResetPasswordForm />} />
        <Route path="signin" element={<SignInForm />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="posts/:id" element={<ContentPage />} />
        <Route path="getuser" element={<GetUser />} />
        <Route
          path="registrationconfirmation"
          element={<ConfirmRegistration />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
