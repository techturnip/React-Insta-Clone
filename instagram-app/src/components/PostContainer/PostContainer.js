import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import CommentBtn from "./CommentBtn";
import LikeBtn from "./LikeBtn";
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
      <div className="post card mx-auto my-4">
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
              <LikeBtn />
              <CommentBtn />
            </div>
            <div className="post-likes">{likes} likes</div>
          </div>

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
