import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export default class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  changeHandler = e => {
    this.setState({ inputText: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.addComment(e, Date.now(), this.state.inputText);
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <div className="comment-input input-group">
          <input
            value={this.state.inputText}
            type="text"
            className="form-control"
            placeholder="Add a comment..."
            onChange={this.changeHandler}
          />
          <button className="btn" type="submit">
            <FontAwesomeIcon size="lg" icon={faEllipsisH} />
          </button>
        </div>
      </form>
    );
  }
}
