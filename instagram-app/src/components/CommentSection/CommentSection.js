import React, { Component } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./CommentSection.css";

export default function CommentSection(props) {
  const { commentData, addComment } = props;

  return (
    <div className="comments">
      {commentData.map(comment => (
        <Comment commentData={comment} key={comment.id} />
      ))}
      <CommentInput addComment={addComment} />
    </div>
  );
}
