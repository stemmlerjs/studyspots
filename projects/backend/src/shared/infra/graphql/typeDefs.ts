import { gql } from "apollo-server";

export const typeDefs = gql`

  type Spot {
    id: ID!
    title: String
    discussion: Discussion 
  }

  type Discussion {
    id: ID!
    spotId: ID! 
  }

  input SpotsFilter {
    city: String
  }

  type Query {
    spots (filters: SpotsFilter): [Spot]!
    discussions: [Discussion]!
  }
`;

