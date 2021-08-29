import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import banner from "./banner.jpg";
import { selectUser } from "./features/userSlice";
import "./sidebar.css";
function Sidebar() {
  const user = useSelector(selectUser)
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={banner} alt="" />
        <Avatar className='sidebar__avatar'>{ user.displayName[0]}</Avatar>
        <h2>{ user.displayName}</h2>
        <h4>{ user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>
        
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
