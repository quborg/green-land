import { model, Schema } from 'mongoose';

type TypeDocument = ItemDocument<Type>;
type TypeModel = ItemModel<TypeDocument>;

const TypeSchema = new Schema<TypeDocument, TypeModel>({
  ID: Number,
  name: { type: String, unique: true },
  order: Number,
  description: String,
});

const TypeModel = model<TypeDocument, TypeModel>('Type', TypeSchema);

export default TypeModel;
