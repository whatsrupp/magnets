import React, { Component } from 'react';
import './App.css';
import Sidebar from 'Sidebar/Sidebar';
import PostsForm from 'PostsForm/PostsForm'
import Viewport from 'Viewport/Viewport'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Viewport>
          <PostsForm />
        </Viewport>
      </div>
    );
  }
}

export default App;
