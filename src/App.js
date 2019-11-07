import React from 'react';

import CommentView from './components/CommentView';

class App extends React.Component {
    render() {
        return ( 
        <div className="ui container comments">
          <h3 className="ui dividing header">Comments</h3>
          <CommentView />
            </div>
        )
    }
}
export default App;