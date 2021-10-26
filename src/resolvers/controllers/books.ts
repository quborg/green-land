import { Book } from '../models';

const books: { Query: Query } = {
  Query: {
    getBook: async (_id) => {
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
        if (args?.filters?.title) {
          const query = args.filters.title.toString();
          books = await Book.find({
            title: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        } else {
          books = await Book.find().skip(args?.start).limit(args?.limit).lean();
        }
        return books;
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
};

export default books;
