interface FiltersArgs {
  start: number;
  limit: number;
  titles: string[];
  keyword: string;
  parents: number[];
  method: 'any' | 'all' | 'exact';
  in: 'indexing' | 'dump';
  exclude: string;
  fatwasOnly: boolean;
  sheikhs: string[];
  books: string[];
  categories: string[];
  chapters: string[];
  chapter: string;
}
