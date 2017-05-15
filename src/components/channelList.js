import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';
import AddChannel from './AddChannel';

const ChannelsList = ({ data: { error, loading, channels } }) => {
  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error: {error.message}</p>);
  return (
    <div className="channelsList">
      <AddChannel />
      {
        channels.map(({ id, name }) =>
          <div key={id} className="channel">
            {name}
          </div>
        )
      }
    </div>
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
