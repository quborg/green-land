import { gql } from 'apollo-server';

const ArgsTypeDefs = gql`
  enum Method {
    any
    all
    exact
  }
  enum In {
    indexing
    dump
  }
  input FiltersArgs {
    start: Int
    limit: Int
    titles: [String]
    keyword: String
    parents: [Int]
    method: Method
    in: In
    exclude: String
    fatwasOnly: Boolean
    sheikhs: [String]
    books: [String]
    categories: [String]
    chapters: [String]
    chapter: String
  }
`;

export default ArgsTypeDefs;
