interface Query {
  getBook?: (_id: string) => Promise<Maybe<Book>>;
  getBooks?: (args: FiltersArgs) => Promise<Maybe<Book[]>>;
  getSheikh?: (_id: string) => Promise<Maybe<Sheikh>>;
  getSheikhs?: (args: FiltersArgs) => Promise<Maybe<Sheikh[]>>;
  getCategory?: (_id: string) => Promise<Maybe<Category>>;
  getCategories?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Category[]>>;
  getType?: (_id: string) => Promise<Maybe<Type>>;
  getTypes?: (args: FiltersArgs) => Promise<Maybe<Type[]>>;
  getChapter?: (_id: string) => Promise<Maybe<Chapter>>;
  getChapters?: (args: FiltersArgs) => Promise<Maybe<Chapter[]>>;
  getContent?: (_id: string) => Promise<Maybe<Content>>;
  getContents?: (args: FiltersArgs) => Promise<Maybe<Content[]>>;
  getContentCat?: (_id: string) => Promise<Maybe<ContentCat>>;
  getContentCats?: (args: FiltersArgs) => Promise<Maybe<ContentCat[]>>;
}
