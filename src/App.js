import React from "react";

import CommentView from "./components/CommentView";

class App extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <CommentView />
      </div>
    );
  }
}
export default App;
