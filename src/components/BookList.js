import React from "react";
import Book from "./Book";

function BookList({ books, toggleRead }) {
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} toggleRead={toggleRead} />
      ))}
    </ul>
  );
}

export default BookList;
