import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.postData.likes
    };
  }

  render() {
    console.log(this.props);

    const {
      username,
      thumbnailUrl,
      imageUrl,
      comments,
      likes
    } = this.props.postData;

    return (
      <div className="post">
        <header className="post-header">
          <img src={thumbnailUrl} alt={`User ${username} thumbnail`} />
          <h2>{username}</h2>
        </header>
        <div className="post-image">
          <img src={imageUrl} alt="" />
        </div>
        <footer>
          <div>HEART COMMENT</div>
          <div className="post-likes">{likes} likes</div>
          <CommentSection commentData={comments} />
        </footer>
      </div>
    );
  }
}

PostContainer.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  })
};
