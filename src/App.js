import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.css";

const LOCAL_STORAGE_KEY = "react-book-list-books";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storageBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageBooks) {
      setBooks(storageBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function addBook(book) {
    setBooks([book, ...books]);
  }

  function toggleRead(id) {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            read: !book.read,
          };
        }
        return book;
      })
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-center">My Favorite Books</h3>
          <BookForm addBook={addBook} />
          <BookList books={books} toggleRead={toggleRead} />
        </div>
      </div>
    </div>
  );
}

export default App;
