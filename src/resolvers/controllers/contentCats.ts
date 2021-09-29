import { ContentCat } from '../models';

const contentCats: { Query: Query } = {
  Query: {
    getContentCat: async (_id) => {
      try {
        const contentCat = await ContentCat.findById(_id);
        return contentCat;
      } catch (err) {
        throw new Error(err);
      }
    },
    getContentCats: async (args) => {
      try {
        let contentCats;
        if (args?.keyword) {
          const query = args.keyword.toString();
          contentCats = await ContentCat.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(0)
            .limit(5)
            .lean();
        } else contentCats = await ContentCat.find().skip(0).limit(5).lean();
        return contentCats;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default contentCats;
