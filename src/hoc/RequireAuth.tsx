import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { GlobalState } from "../reduxTools/store";

interface IProps {
  children: JSX.Element;
}
const userSelector = (state: GlobalState) => state.auth.user;

const RequireAuth = (props: IProps) => {
  const user = useSelector(userSelector);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  return props.children;
};

export default RequireAuth;
