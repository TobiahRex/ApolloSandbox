import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

const ChannelsList = () => (
  <ul className="Item-list">
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>
);

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default ChannelsListWithData;
