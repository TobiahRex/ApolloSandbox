import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';
import { channelsListQuery } from './ChannelsList';

const AddChannel = ({ mutate }) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      e.persist(); // see below
      mutate({
        variables: {
          name: e.target.value,
        },
        // refetchQueries: [{ query: channelsListQuery }],
        update: (store, { data: { addChannel } }) => {
          // Read the data from the cache for this query
          const data = store.readQuery({ query: channelsListQuery });
          // Add our channel, from the mutation, to the channels array.
          data.channels.push(addChannel);
          // Write the data back to the cache.
          store.writeQuery({ query: channelsListQuery, data });
        },
      })
      .then(res => (e.target.value = ''));
    }
  };

  return (
    <input
      type="text"
      placeholder="New Channel"
      onKeyUp={handleKeyUp}
    />
  )
}
const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;
export default graphql(addChannelMutation)(AddChannel);

/*
e.persit():
  From react docs: https://facebook.github.io/react/docs/events.html
  > If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
*/
