const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];
let nextId = 3;
const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
  Mutation: {
    addChannel: (_, { name }) => {
      const newChannel = { id: nextId++, name };
      channels.push(newChannel);
      return newChannel;
    }
  }
};

export default resolvers;
