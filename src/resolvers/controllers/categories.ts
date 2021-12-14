import { Category } from '../models';

const categories: { Query: Query } = {
  Query: {
    getCategory: async (_, { _id }) => {
      try {
        const category = await Category.findById(_id);
        return category;
      } catch (err) {
        throw new Error(err as string);
      }
    },
    getCategories: async (_, { args }) => {
      try {
        let categories: Maybe<ICategory[]>;
        const start = args?.start || 0;
        const limit = args?.limit || 20;
        const keyword = (args?.keyword || '').toString();
        const parents = args?.parents || [0];
        const $or = parents.map((parent) => ({ parent }));
        let filter = {};
        if (keyword) {
          filter = { name: { $regex: keyword, $options: 'i' } };
        }
        filter = { ...filter, $or };
        categories = await Category.find(filter).sort('order').skip(start).limit(limit).lean();
        return categories;
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
};

export default categories;
