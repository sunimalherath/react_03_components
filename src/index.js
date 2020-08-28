import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail"; // ./ means look in the same folder

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="John"
        timeAgo="Today at 0400"
        commentText="John's comment"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 1300"
        commentText="Jane's comment"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Matrix"
        timeAgo="Yesterday at 0900"
        commentText="Matrix's comment"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
