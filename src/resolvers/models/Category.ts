import { model, Schema } from 'mongoose';

type CategoryDocument = ItemDocument<Category>;
type CategoryModel = ItemModel<CategoryDocument>;

const CategorySchema = new Schema<CategoryDocument, CategoryModel>({
  ID: Number,
  name: String,
  order: Number,
  parent: Number,
  child: Boolean,
  parentRef: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  level: Number,
  description: String,
});

const CategoryModel = model<CategoryDocument, CategoryModel>('Category', CategorySchema);

export default CategoryModel;
