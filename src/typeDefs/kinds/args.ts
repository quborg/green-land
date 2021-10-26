import { gql } from 'apollo-server';

const ArgsTypeDefs = gql`
  input FiltersInput {
    parent: Int
    title: String
    name: String
  }

  input FiltersArgs {
    keyword: String
    start: Int
    limit: Int
    filters: FiltersInput
  }
`;

export default ArgsTypeDefs;
