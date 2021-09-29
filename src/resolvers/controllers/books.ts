import { Book, Type } from '../models';

const books: { Query: Query } = {
  Query: {
    getBook: async (_id) => {
      try {
        const color = await Book.findById(_id);
        return color;
      } catch (err) {
        throw new Error(err);
      }
    },
    getBooks: async (args) => {
      try {
        let books: Maybe<IBook[]>;
        if (!args?.keyword) {
          books = await Book.find().skip(args?.start).limit(args?.limit).lean();
        } else {
          const query = args.keyword.toString();
          books = await Book.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        }
        return books;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default books;
