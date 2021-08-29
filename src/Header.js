import { Avatar } from "@material-ui/core";
import userpic from "./userpic.jpg";
import {
  BusinessCenter,
  Chat,
  Home,
  LinkedIn,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import React from "react";
import "./header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkedIn className="header__logo" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={userpic} title="logout" />
      </div>
    </div>
  );
}

export default Header;
