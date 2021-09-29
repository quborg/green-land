import { Content, Sheikh, Book } from '../models';

const contents: { Query: Query } = {
  Query: {
    getContent: async (_id) => {
      try {
        const content = await Content.findById(_id);
        return content;
      } catch (err) {
        throw new Error(err);
      }
    },
    getContents: async (args) => {
      try {
        let contents;
        if (args?.keyword) {
          const query = args.keyword.toString();
          contents = await Content.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        } else contents = await Content.find().limit(5).lean();
        return contents;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default contents;
