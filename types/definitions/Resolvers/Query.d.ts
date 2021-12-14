interface Query {
  getBook?: (_: any, __: { _id: string }) => Promise<Maybe<Book>>;
  getBooks?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Book[]>>;
  getSheikh?: (_: any, __: { _id: string }) => Promise<Maybe<Sheikh>>;
  getSheikhs?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Sheikh[]>>;
  getCategory?: (_: any, __: { _id: string }) => Promise<Maybe<Category>>;
  getCategories?: (_: any, __: { args: FiltersArgs }) => Promise<Maybe<Category[]>>;
  getChapter?: (_: any, __: { _id: string }) => Promise<Maybe<Chapter>>;
  getChapterByCode?: (_: any, __: { code: number }) => Promise<Maybe<Chapter>>;
  getChapters?: (
    _: any,
    __: { args: FiltersArgs }
  ) => Promise<{ data: Maybe<String[]>; count: Number }>;
  getChaptersByTitle?: (
    _: any,
    __: { args: FiltersArgs }
  ) => Promise<Maybe<{ title: string; chapters: Maybe<Chapter[]> }[]>>;
  getContent?: (_: any, __: { _id: string }) => Promise<Maybe<Content>>;
  getContents?: (
    _: any,
    __: { args: FiltersArgs }
  ) => Promise<{ data: Maybe<Content[]>; count: Number }>;
}
