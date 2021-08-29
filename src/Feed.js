import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./feed.css";
import { db } from "./firebase";
import firebase from "firebase";
import InputOption from "./InputOption";
import Post from "./Post";
import flipMove from 'react-flip-move'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
const user =useSelector(selectUser)
  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        name: user.displayName,
        description: user.email,
        message: message,
        photoUrl: user.photoUrl||'',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch((err) => alert(err.message));
    setMessage("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button type="submit" onClick={sendPost}>
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="photo" color="#7485f9" />
          <InputOption Icon={Subscriptions} title="video" color="#e7a33e" />
          <InputOption Icon={EventNote} title="event" color="#c0c8cd" />
          <InputOption
            Icon={CalendarViewDay}
            title="write article"
            color="#7fc15e"
          />
        </div>
      </div>
      <flipMove>
      {posts.map(({ id, data: { name, description, photoUrl, message } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}

        />
      ))}
      </flipMove>
      
    </div>
  );
}

export default Feed;
