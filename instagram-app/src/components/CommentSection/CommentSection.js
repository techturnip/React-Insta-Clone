import React, { Component } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./CommentSection.css";

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { commentData } = this.props;
    return (
      <div className="comments">
        {commentData.map(comment => (
          <Comment commentData={comment} key={comment.id} />
        ))}
        <CommentInput />
      </div>
    );
  }
}
