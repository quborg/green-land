import { gql } from 'apollo-server';

const ResultsTypeDefs = gql`
  type ChaptersResult {
    data: [String]
    count: Int
  }
  type ContentsResult {
    data: [Content]
    count: Int
  }
  type ChaptersByTitleResult {
    title: String
    chapters: [Chapter]
  }
`;

export default ResultsTypeDefs;
