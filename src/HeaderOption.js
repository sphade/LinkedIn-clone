import { Avatar } from "@material-ui/core";
import React from "react";
import "./headeroption.css";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
function HeaderOption({ avatar, title, Icon }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  return (
    <div className="headeroption">
          {Icon && <Icon className="headeroption__icon" />}
          {avatar && (
        <Avatar className='headeroption__icon'   onClick={() => {
          auth.signOut()
          dispatch(logout())
        }}>{ user?.displayName[0]}</Avatar>
          )}
      <h3 className="headeroption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
