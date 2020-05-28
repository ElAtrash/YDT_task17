import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "Harry Potter",
    author: "JKR",
    read: false,
  },
  {
    id: uuid(),
    title: "The Lord of the Rings",
    author: "JRR Tolkien",
    read: true,
  },
];

const booksReducer = (state = initialState, action) => {
  const { type, bookData } = action;

  switch (type) {
    case "CREATE_BOOK":
      return [
        ...state,
        {
          id: uuid(),
          title: bookData.title,
          author: bookData.author,
          read: false,
        },
      ];
    case "TOGGLE_BOOK":
      return state.map((book) =>
        book.id === bookData.id ? { ...book, read: !book.read } : book
      );
    default:
      return state;
  }

  return state;
};

export default booksReducer;
