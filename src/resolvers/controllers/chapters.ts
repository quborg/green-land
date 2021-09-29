import { Chapter } from '../models';

const chapters: { Query: Query } = {
  Query: {
    getChapter: async (_id) => {
      try {
        const chapter = await Chapter.findById(_id);
        return chapter;
      } catch (err) {
        throw new Error(err);
      }
    },
    getChapters: async (args) => {
      try {
        let chapters;
        if (args?.keyword) {
          const query = args.keyword.toString();
          chapters = await Chapter.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        } else chapters = await Chapter.find().skip(args?.start).limit(args?.limit).lean();
        return chapters;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default chapters;
