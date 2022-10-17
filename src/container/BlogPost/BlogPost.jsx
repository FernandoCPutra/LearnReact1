import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./BlogPost.css";
import "../../component/Post/Post";
import Post from "../../component/Post/Post";

class BlogPost extends Component {
  handleRemove = (data) => {
    console.log("delete");
  };

  state = {
    post: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json,
        });
      });
  }

  render() {
    return (
      <Fragment>
        <p>Blog Post pages</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <hr />
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              desc={post.body}
              remove={this.handleRemove}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
