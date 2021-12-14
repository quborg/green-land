import { model, Schema } from 'mongoose';

type ContentDocument = ItemDocument<Content>;
type ContentModel = ItemModel<ContentDocument>;

const ContentSchema = new Schema<ContentDocument, ContentModel>({
  code: Number,
  seq: Number,
  sheikh: {
    type: Schema.Types.ObjectId,
    ref: 'Sheikh',
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  HNum: Number,
  line: String,
  offsetStart: Number,
  offsetEnd: Number,
  write: String,
  ques: Number,
});

const ContentModel = model<ContentDocument, ContentModel>('Content', ContentSchema);

export default ContentModel;
