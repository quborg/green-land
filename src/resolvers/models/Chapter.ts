import { model, Schema } from 'mongoose';

type ChapterDocument = ItemDocument<Chapter>;
type ChapterModel = ItemModel<ChapterDocument>;

const ChapterSchema = new Schema<ChapterDocument, ChapterModel>({
  code: { type: Number, unique: true },
  title: String,
  sheikh: {
    type: Schema.Types.ObjectId,
    ref: 'Sheikh',
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
  categories: [
    {
      seq: Number,
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
    },
  ],
  fileName: String,
  fileSize: Number,
  duration: Number,
  path: String,
  CDNumber: String,
  order: Number,
});

const ChapterModel = model<ChapterDocument, ChapterModel>('Chapter', ChapterSchema);

export default ChapterModel;
