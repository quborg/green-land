import { Sheikh } from '../models';

const sheikhs: { Query: Query } = {
  Query: {
    getSheikh: async (_id) => {
      try {
        const color = await Sheikh.findById(_id);
        return color;
      } catch (err) {
        throw new Error(err);
      }
    },
    getSheikhs: async (args) => {
      try {
        let sheikhs: Maybe<ISheikh[]>;
        if (args?.keyword) {
          const query = args.keyword.toString();
          sheikhs = await Sheikh.find({
            name: { $regex: query, $options: 'i' },
          })
            .skip(args?.start)
            .limit(args?.limit)
            .lean();
        } else sheikhs = await Sheikh.find().skip(args?.start).limit(args?.limit).lean();
        return sheikhs;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default sheikhs;
