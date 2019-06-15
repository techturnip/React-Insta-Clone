import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import CommentBtn from "./CommentBtn";
import LikeBtn from "./LikeBtn";

export default function Post(props) {
  const { username, thumbnailUrl, imageUrl } = props.postData;

  console.log(props.likes);

  return (
    <>
      <header className="post-header">
        <img
          className="user-thumbnail"
          src={thumbnailUrl}
          alt={`User ${username} thumbnail`}
        />
        <h2 className="post-username">{username}</h2>
      </header>
      <div className="post-image">
        <img className="img-fluid" src={imageUrl} alt="" />
      </div>
      <footer className="post-footer">
        <div className="post-interact">
          <div className="post-interact-btns">
            <LikeBtn likeToggle={props.likeToggle} />
            <CommentBtn />
          </div>
          <div className="post-likes">{props.likes} likes</div>
        </div>

        <CommentSection
          commentData={props.commentData}
          addComment={props.addComment}
        />
      </footer>
    </>
  );
}
