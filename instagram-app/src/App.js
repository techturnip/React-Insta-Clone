import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
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
