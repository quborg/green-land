import { model, Schema } from 'mongoose';

type ContentCatDocument = ItemDocument<ContentCat>;
type ContentCatModel = ItemModel<ContentCatDocument>;

const ContentCatSchema = new Schema<ContentCatDocument, ContentCatModel>({
  code: Number,
  seq: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'ContentCat',
  },
  sheikh: {
    type: Schema.Types.ObjectId,
    ref: 'Sheikh',
  },
});

const ContentCatModel = model<ContentCatDocument, ContentCatModel>(
  'ContentCat',
  ContentCatSchema
);

export default ContentCatModel;
