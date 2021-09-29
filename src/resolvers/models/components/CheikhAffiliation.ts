import { Schema } from 'mongoose';

import Affiliation from './Affiliation';

type CheikhAffiliationType = ItemDocument<CheikhAffiliation>;

const CheikhAffiliationSchema = new Schema<CheikhAffiliationType>({
  affiliation: Affiliation,
  role: String,
  description: String,
});

export default CheikhAffiliationSchema;
