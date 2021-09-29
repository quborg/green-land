type Document = import('mongoose').Document;
type Model<T> = import('mongoose').Model<T>;

type ItemDocument<T> = Document &
  {
    [P in keyof T]: T[P];
  };

type ItemModel<IdemDocument> = Model<IdemDocument>;
