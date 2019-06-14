import React from "react";

export default function Comment(props) {
  const { username, text } = props.commentData;
  return (
    <div className="comment my-2">
      <span className="comment-username">{username}</span> {text}
    </div>
  );
}
