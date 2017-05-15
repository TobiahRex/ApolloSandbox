import React, { Component } from 'react';
import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import ChannelsList from './components/ChannelsList';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});
networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  },
}]);
const client = new ApolloClient({ networkInterface });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">
            <ChannelsList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
