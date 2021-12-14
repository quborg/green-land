import { FilterToSchema } from 'apollo-server';
import { Content, Chapter, Book } from '../models';

const contents: { Query: Query } = {
  Query: {
    getContent: async (_, { _id }) => {
      try {
        const content = await Content.findById(_id)
          .populate('sheikh')
          .populate('book')
          .populate('category');
        return content;
      } catch (err) {
        throw new Error(err as string);
      }
    },
    getContents: async (_, { args }) => {
      try {
        let contents: Maybe<IContent[]>;
        const start = args?.start || 0;
        const limit = args?.limit || 20;
        const keyword = args?.keyword?.trim();
        const exclude = args?.exclude?.trim();
        const fieldWord = args?.in === 'dump' ? 'write' : 'line';
        const method = !args?.method ? 'exact' : args.method;
        let filter = {};
        let keywordOp = {};
        let excludeOp = {};
        if (keyword) {
          if (method === 'exact') keywordOp = { $in: [new RegExp(keyword, 'i')] };
          else {
            const op = method === 'all' ? '$all' : '$in';
            keywordOp = { [op]: keyword.split(' ').map((word) => new RegExp(word, 'i')) };
          }
        }
        if (exclude) {
          excludeOp = { $nin: exclude.split(' ').map((word) => new RegExp(word, 'i')) };
        }
        if (Object.keys(keywordOp).length || Object.keys(excludeOp).length)
          filter = { [fieldWord]: { ...keywordOp, ...excludeOp } };

        if (args?.sheikhs?.length) {
          filter = {
            ...filter,
            sheikh: args.sheikhs,
          };
        }
        if (args?.categories?.length) {
          filter = {
            ...filter,
            category: args.categories,
          };
        }
        if (args?.books?.length) {
          filter = {
            ...filter,
            book: args.books,
          };
        }
        if (args?.chapters?.length) {
          const codes = await Chapter.find({ title: { $in: args.chapters } }, 'code').lean();
          filter = {
            ...filter,
            code: codes.map(({ code }) => code),
          };
        }
        if (args?.chapter) {
          const chapter = await Chapter.findById(args.chapter).lean();
          filter = {
            ...filter,
            code: chapter?.code,
          };
        }
        if (args?.fatwasOnly) {
          const books = await Book.find({
            title: { $in: [new RegExp('فتاوى', 'i'), new RegExp('فتوى', 'i')] },
          }).lean();
          filter = {
            ...filter,
            book: books.map(({ _id }) => _id),
          };
        }
        const count = await Content.countDocuments(filter);
        contents = await Content.find(filter)
          .sort('line')
          .populate('book')
          .skip(start)
          .limit(limit)
          .lean();
        return { data: contents, count };
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
};

export default contents;
