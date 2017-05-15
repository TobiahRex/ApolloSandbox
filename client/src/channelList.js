import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

const ChannelsList = ({ data: { error, loading, channels } }) => {
  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error: {error.message}</p>);
  return (
    <ul className="Item-list">
      {
        channels.map(({ id, name }) =>
          <li key={id}>
            {name}
          </li>
        )
      }
    </ul>
  );
}

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`
export default graphql(channelsListQuery)(ChannelsList);
