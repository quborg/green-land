import { Schema } from 'mongoose';

type AffiliationType = ItemDocument<Affiliation>;

const AffiliationSchema = new Schema<AffiliationType>({
  name: String,
  address: String,
  email: String,
  country: String,
  description: String,
});

export default AffiliationSchema;
