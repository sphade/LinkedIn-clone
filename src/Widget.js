import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./widget.css";
function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
          <div className="widget__articleLeft">
          <FiberManualRecord/>
          </div>
          <div className="widget__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle} </p>
          </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <Info />
          </div>
          {newsArticle('lawal is back', "Top news -9909 readers")}
          {newsArticle('REACT, the framework of the web', "Top news -63509 readers")}
          {newsArticle('elon musk makes a bid....', "Top news -4029 readers")}
          {newsArticle('The MERN stack', "Top news -2909 readers")}
          {newsArticle('REACT vs VUE', "Top news -1959 readers")}
          {newsArticle('the course for the minded', "Top news -w9909 readers")}
    </div>
  );
}

export default Widget;
