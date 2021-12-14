import { Books, Sheikhs, Categories, Chapters, Contents } from './controllers';

const Resolvers: Resolvers = {
  Query: {
    ...Books.Query,
    ...Sheikhs.Query,
    ...Categories.Query,
    ...Chapters.Query,
    ...Contents.Query,
  },
};

export default Resolvers;
