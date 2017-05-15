import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

import { typeDefs } from './schema';
import './App.css';
import ChannelList from './components/channelList';

const schema = makeExecutableSchema({ typeDefs });
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({ networkInterface });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">
            <ChannelList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
