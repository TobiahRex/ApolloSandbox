import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider,
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
addMockFunctionsToSchema({ schema });
const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
const client = new ApolloClient({
  networkInterface: mockNetworkInterface,
});

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
