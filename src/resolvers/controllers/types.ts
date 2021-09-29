import { Type } from '../models';

const types: { Query: Query } = {
  Query: {
    getType: async (_id) => {
      try {
        const type = await Type.findById(_id);
        return type;
      } catch (err) {
        throw new Error(err);
      }
    },
    getTypes: async (args) => {
      try {
        let types;
        if (args?.keyword) {
          const query = args.keyword.toString();
          types = await Type.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        } else types = await Type.find().skip(args?.start).limit(args?.limit).lean();
        return types;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default types;
