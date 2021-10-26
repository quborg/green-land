interface Query {
  getBook?: (_id: string) => Promise<Maybe<Book>>;
  getBooks?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Book[]>>;
  getSheikh?: (_id: string) => Promise<Maybe<Sheikh>>;
  getSheikhs?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Sheikh[]>>;
  getCategory?: (_id: string) => Promise<Maybe<Category>>;
  getCategories?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Category[]>>;
  getType?: (_id: string) => Promise<Maybe<Type>>;
  getTypes?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Type[]>>;
  getChapter?: (_id: string) => Promise<Maybe<Chapter>>;
  getChapters?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Chapter[]>>;
  getContent?: (_id: string) => Promise<Maybe<Content>>;
  getContents?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Content[]>>;
  getContentCat?: (_id: string) => Promise<Maybe<ContentCat>>;
  getContentCats?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<ContentCat[]>>;
}
