import { gql } from 'apollo-server';

const QueriesTypeDefs = gql`
  type Query {
    getBook(_id: ID!): Book
    getBooks(args: FiltersArgs): [Book]
    getSheikh(_id: ID!): Sheikh
    getSheikhs(args: FiltersArgs): [Sheikh]
    getCategory(_id: ID!): Category
    getCategories(args: FiltersArgs): [Category]
    getType(_id: ID!): Type
    getTypes(args: FiltersArgs): [Type]
    getChapter(_id: ID!): Chapter
    getChapters(args: FiltersArgs): [Chapter]
    getContent(_id: ID!): Content
    getContents(args: FiltersArgs): [Content]
    getContentCat(_id: ID!): ContentCat
    getContentCats(args: FiltersArgs): [ContentCat]
  }
`;

export default QueriesTypeDefs;
