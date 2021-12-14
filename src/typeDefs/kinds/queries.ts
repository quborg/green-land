import { gql } from 'apollo-server';

const QueriesTypeDefs = gql`
  type Query {
    getBook(_id: ID!): Book
    getBooks(args: FiltersArgs): [Book]
    getSheikh(_id: ID!): Sheikh
    getSheikhs(args: FiltersArgs): [Sheikh]
    getCategory(_id: ID!): Category
    getCategories(args: FiltersArgs): [Category]
    getChapter(_id: ID!): Chapter
    getChapterByCode(code: Int!): Chapter
    getChapters(args: FiltersArgs): ChaptersResult
    getChaptersByTitle(args: FiltersArgs): [ChaptersByTitleResult]
    getContent(_id: ID!): Content
    getContents(args: FiltersArgs): ContentsResult
  }
`;

export default QueriesTypeDefs;
