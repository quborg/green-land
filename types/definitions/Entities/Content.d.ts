interface Content {
  _id: string;
  code: number;
  seq: number;
  sheikh: Sheikh;
  book: Book;
  HNum: number;
  line: string;
  offsetStart: number;
  offsetEnd: number;
  write: string;
  ques: number;
}

type IContent = Content;
