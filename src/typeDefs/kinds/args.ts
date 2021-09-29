import { gql } from 'apollo-server';

const ArgsTypeDefs = gql`
  input FilterInput {
    parent: Int!
  }

  input FiltersArgs {
    keyword: String
    start: Int
    limit: Int
    filter: FilterInput
  }
`;

export default ArgsTypeDefs;
