import { Category } from '../models';

const categories: { Query: Query } = {
  Query: {
    getCategory: async (_id) => {
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
        if (args?.filters?.name) {
          const query = args.filters.name.toString();
          categories = await Category.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        } else {
          categories = await Category.find(args?.filters || { parent: 0 })
            .sort('order')
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        }
        return categories;
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
};

export default categories;
