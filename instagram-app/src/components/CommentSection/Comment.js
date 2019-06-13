import React from "react";

export default function Comment(props) {
  const { username, text } = props.commentData;
  return (
    <div className="comment">
      <span className="username">{username}</span> {text}
    </div>
  );
}
