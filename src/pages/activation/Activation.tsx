/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { activateUserAsyncAction } from "../../reduxTools/reducers/activateReducer/actions";
import { GlobalState } from "../../reduxTools/store";

const Activation = () => {
  const { uid, token } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activate = useSelector((state: GlobalState) => state.activate);
  useEffect(() => {
    if (uid && token) {
      dispatch(activateUserAsyncAction(uid, token, () => navigate("/success")));
    }
  }, [navigate, token, uid]);

  return (
    <div>
      Activation failed
      <div>{JSON.stringify(activate)}</div>
      <input
        type="button"
        value="activate"
        onClick={() => navigate("/success")}
      />
    </div>
  );
};

export default Activation;
