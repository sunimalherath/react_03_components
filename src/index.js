import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail"; // ./ means look in the same folder

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="John" />
      <CommentDetail author="Jane" />
      <CommentDetail author="Matrix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
