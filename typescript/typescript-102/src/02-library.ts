class Library {
  titles: string[] ;
  constructor() {
    this.titles = ["What if?",
    "Flow"];
  }
}

const library = new Library();
// it will sure that titles are there in library
// there check in tsconfig call "strictPropertyInitialization" which could check if
// the value be provided as well
const shortTitles = library.titles.filter(
  title => title.length < 5
);