import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { selectUser, login, selectLoggedIn } from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
interface Props {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();
  const loggedIn = useAppSelector(selectLoggedIn)

  useEffect(() => {
    // if (!auth.currentUser) {
      if(!loggedIn){
      navigate("/login");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

export default AuthChecker;
