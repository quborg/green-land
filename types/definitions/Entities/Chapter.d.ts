interface Chapter {
  code: number;
  sheikh: Sheikh;
  book: Book;
  categories: [
    {
      seq: number;
      category: Category;
    }
  ];
  title: string;
  fileName: string;
  fileSize: number;
  duration: number;
  path: string;
  CDNumber: string;
  order: number;
}

type IChapter = Chapter;
