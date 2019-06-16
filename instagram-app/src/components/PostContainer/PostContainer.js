import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./Post";

import "./PostContainer.css";

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.localStorage = JSON.parse(
      localStorage.getItem(this.props.postData.id)
    );

    console.log(this.localStorage);
    this.state = {
      comments: this.props.postData.comments,
      likes: this.props.postData.likes,
      likePost: false
    };
  }

  componentDidMount() {
    if (this.localStorage !== null) {
      this.setState({ comments: this.localStorage });
    }
  }

  likeToggle = e => {
    if (this.state.likePost === false) {
      e.target.style.color = "red";
      const newLikeCount = this.state.likes + 1;
      this.setState({ likes: newLikeCount, likePost: true });
    } else {
      e.target.style.color = "";
      const newLikeCount = this.state.likes - 1;
      this.setState({ likes: newLikeCount, likePost: false });
    }
  };

  addNewComment = (e, id, text) => {
    const newComment = {
      id: id,
      username: "anonymous",
      text: text
    };

    const newArrComments = [...this.state.comments, newComment];

    console.log(newArrComments);

    this.setState({ comments: newArrComments });

    localStorage.setItem(
      this.props.postData.id,
      JSON.stringify(newArrComments)
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="post card mx-auto my-4">
        <Post
          postData={this.props.postData}
          likes={this.state.likes}
          commentData={this.state.comments}
          addComment={this.addNewComment}
          likeToggle={this.likeToggle}
        />
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

PostContainer.defaultProps = {
  postData: []
};
