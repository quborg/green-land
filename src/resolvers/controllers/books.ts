import { Book } from '../models';

const books: { Query: Query } = {
  Query: {
    getBook: async (_, { _id }) => {
      try {
        const color = await Book.findById(_id);
        return color;
      } catch (err) {
        throw new Error(err as string);
      }
    },
    getBooks: async (_, { args }) => {
      try {
        let books: Maybe<IBook[]>;
        const start = args?.start || 0;
        const limit = args?.limit || 0;
        const keyword = (args?.keyword || '').toString();
        let filter = {};
        if (keyword) {
          filter = { title: { $regex: keyword, $options: 'i' } };
        }
        books = await Book.find(filter).skip(start).limit(limit).lean();
        return books;
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
};

export default books;
