import { Avatar } from "@material-ui/core";
import {  ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import React, {forwardRef} from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import InputOption from "./InputOption";
import "./post.css";
const Post = forwardRef(({ name, description, message, photoUrl },ref) =>{
  const user = useSelector(selectUser)
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar ></Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
          </div>
          <div className="post__buttons">
              <InputOption Icon={ ThumbUpAltOutlined} title='like' color='gray'/>
              <InputOption Icon={ ChatOutlined} title='connect' color='gray'/>
              <InputOption Icon={ ShareOutlined} title='share' color='gray'/>
              <InputOption Icon={ SendOutlined} title='send' color='gray'/>
          </div>
    </div>
  );
})

export default Post;
