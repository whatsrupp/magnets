import React, { Component } from 'react';
import './App.css';
import Sidebar from 'Sidebar/Sidebar';
import PostsForm from 'PostsForm/PostsForm';
import Viewport from 'Viewport/Viewport';
import apolloClient from './ApolloClient';
import { ApolloProvider } from 'react-apollo';


class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <Sidebar />
          <Viewport>
            <PostsForm />
          </Viewport>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
