import { model, Schema } from 'mongoose';

import { CheikhAffiliation } from './components';

type SheikhDocument = ItemDocument<Sheikh>;
type SheikhModel = ItemModel<SheikhDocument>;

const SheikhSchema = new Schema<SheikhDocument, SheikhModel>({
  ID: Number,
  name: String,
  order: Number,
  additionalNames: [String],
  country: String,
  affiliations: [CheikhAffiliation],
  professions: [String],
  role: [String],
  birthDate: String,
  email: String,
  jobTitle: String,
  accomplishments: [String],
  achievements: [String],
  biography: String,
});

const SheikhModel = model<SheikhDocument, SheikhModel>('Sheikh', SheikhSchema);

export default SheikhModel;
