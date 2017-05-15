import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChannelList from './channelList';

import {
  ApolloClient,
  ApolloProvider,
} from 'react-apollo';

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <p className="App-intro">
            <ChannelList />
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
