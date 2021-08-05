
const spots = [
  {
    id: '123',
    title: "Starbucks"
  }
]

const discussions = [
  {
    id: '123',
    spotId: '345'
  }
]

const resolvers = {
  Query: {
    spots: () => spots,
    discussions: () => discussions
  },
};

export { resolvers }