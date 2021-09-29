import { model, Schema } from 'mongoose';

type BookDocument = ItemDocument<Book>;
type BookModel = ItemModel<BookDocument>;

const BookSchema = new Schema<BookDocument, BookModel>({
  ID: Number,
  isbn: String,
  format: String,
  title: String,
  subtitle: String,
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
  },
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sheikh',
    },
  ],
  presenters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sheikh',
    },
  ],
  correctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sheikh',
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  description: String,
  languages: [String],
  advice: String,
  publishers: [String],
  pages: Number,
  publicationDate: String,
  saleDate: String,
  group: String,
  series: String,
  volume: Number,
  related: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

const BookModel = model<BookDocument, BookModel>('Book', BookSchema);

export default BookModel;
