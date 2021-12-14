import { Sheikh } from '../models';

const sheikhs: { Query: Query } = {
  Query: {
    getSheikh: async (_, { _id }) => {
      try {
        const color = await Sheikh.findById(_id);
        return color;
      } catch (err) {
        throw new Error(err as string);
      }
    },
    getSheikhs: async () => {
      try {
        let sheikhs: Maybe<ISheikh[]>;
        sheikhs = await Sheikh.find().sort('order').lean();
        return sheikhs;
      } catch (err) {
        throw new Error(err as string);
      }
    },
  },
};

export default sheikhs;
