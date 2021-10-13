import { Types } from 'mongoose';
import { Category } from '../models';

const categories: { Query: Query } = {
  Query: {
    getCategory: async (_id) => {
      try {
        const category = await Category.findById(_id);
        return category;
      } catch (err) {
        throw new Error(err);
      }
    },
    getCategories: async (_, { args }) => {
      try {
        const categories = await Category.find(args?.filter || { parent: 0 })
          .sort('order')
          .skip(args?.start)
          .limit(args?.limit)
          .lean();
        return categories;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default categories;
