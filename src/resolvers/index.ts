import {
  Books,
  Sheikhs,
  Categories,
  Types,
  Chapters,
  Contents,
  ContentCats,
} from './controllers';

const Resolvers: Resolvers = {
  Query: {
    ...Books.Query,
    ...Sheikhs.Query,
    ...Categories.Query,
    ...Types.Query,
    ...Chapters.Query,
    ...Contents.Query,
    ...ContentCats.Query,
  },
};

export default Resolvers;
