import { gql } from 'apollo-server';

const EntitiesTypeDefs = gql`
  type Book {
    _id: ID!
    ID: Int
    isbn: String
    format: String
    title: String
    subtitle: String
    type: Type
    authors: [Sheikh]
    presenters: [Sheikh]
    correctors: [Sheikh]
    categories: [Category]
    description: String
    languages: [String]
    advice: String
    editions: [String]
    publishers: [String]
    pages: Int
    publicationDate: String
    saleDate: String
    group: String
    series: String
    volume: Int
    related: [Book]
  }
  type Sheikh {
    _id: ID!
    ID: Int
    name: String
    order: Int
    additionalNames: [String]
    country: String
    affiliations: [CheikhAffiliation]
    professions: [String]
    role: [String]
    birthDate: String
    email: String
    jobTitle: String
    accomplishments: [String]
    achievements: [String]
    biography: String
  }
  type CheikhAffiliation {
    affiliation: Affiliation
    role: String
    description: String
  }
  type Affiliation {
    name: String
    address: String
    email: String
    country: String
    description: String
  }
  type Category {
    _id: ID!
    ID: Int
    name: String
    order: Int
    parent: Int
    child: Boolean
    parentRef: Category
    level: Int
    description: String
  }
  type Type {
    _id: ID!
    name: String
    order: Int
    description: String
  }
  type Chapter {
    _id: ID!
    code: Int
    sheikh: Sheikh
    book: Book
    title: String
    fileName: String
    fileSize: Int
    duration: Int
    path: String
    CDNumber: String
    order: Int
  }
  type Content {
    _id: ID!
    code: Int
    seq: Int
    sheikh: Sheikh
    book: Book
    HNum: Int
    line: String
    offsetStart: Int
    offsetEnd: Int
    write: String
    ques: Int
  }
  type ContentCat {
    _id: ID!
    code: Int
    seq: Int
    category: Category
    sheikh: Sheikh
  }
`;

export default EntitiesTypeDefs;
