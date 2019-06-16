import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    };
  }

  search = username => {
    const newPostData = this.state.postData.filter(posts => {
      return posts.username === username;
    });

    if (username !== "") {
      this.setState({ postData: newPostData });
    } else {
      this.setState({ postData: dummyData });
    }
  };

  componentDidMount() {
    this.setState({ postData: dummyData });
  }

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar search={this.search} />
        </header>
        <section className="container">
          {this.state.postData.map(post => (
            <PostContainer postData={post} key={post.id} />
          ))}
        </section>
      </div>
    );
  }
}
