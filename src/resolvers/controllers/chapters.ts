import { Chapter } from '../models';

const chapters: { Query: Query } = {
  Query: {
    getChapter: async (_, { _id }) => {
      try {
        const chapter = await Chapter.findById(_id);
        return chapter;
      } catch (err) {
        throw new Error(err as string);
      }
    },
    getChapterByCode: async (_, { code }) => {
      try {
        const chapter = await Chapter.findOne({ code });
        return chapter;
      } catch (err) {
        throw new Error(err as string);
      }
    },
    getChapters: async (_, { args }) => {
      try {
        let chapters;
        const start = args?.start || 0;
        const limit = args?.limit || 20;
        const keyword = args?.keyword?.trim();
        let filter = {};
        if (keyword) {
          filter = { title: { $regex: keyword, $options: 'i' } };
        }
        if (args?.sheikhs?.length) {
          filter = {
            ...filter,
            sheikh: args.sheikhs,
          };
        }
        if (args?.books?.length) {
          filter = {
            ...filter,
            book: args.books,
          };
        }
        if (args?.categories?.length) {
          filter = {
            ...filter,
            'categories.category': args.categories,
          };
        }
        chapters = await Chapter.find(filter).sort('title').distinct('title');
        const count = chapters.length;
        chapters = chapters.slice(start, start + limit);
        return { data: chapters, count };
      } catch (err) {
        throw new Error(err as string);
      }
    },
    getChaptersByTitle: async (_, { args }) => {
      try {
        let chapters = [{ title: '', chapters: [] as any }];
        const titles = args?.titles || [];
        if (titles.length) {
          chapters = [];
          for (let i = 0; i < titles.length; i++) {
            const _chapters = await Chapter.find({ title: titles[i] }).sort('fileName');
            chapters.push({ title: titles[i], chapters: _chapters.length ? _chapters : [] });
          }
        }
        return chapters;
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
};

export default chapters;
