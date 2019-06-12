import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";

export default class PostContainer extends Component {
  render() {
    return (
      <div>
        This is the PostContainer
        <CommentSection />
      </div>
    );
  }
}
