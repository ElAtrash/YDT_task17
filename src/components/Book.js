import React from "react";
import { useDispatch } from "react-redux";

const Book = (book, toogleBook) => {
  const dispatch = useDispatch();
  const toggleBook = () => {
    dispatch({
      type: "TOGGLE_BOOK",
      bookData: {
        id: book.id,
      },
    });
  };
  function handleClick() {
    toggleBook(book.id);
  }
  return (
    <div>
      <li className="list-group-item col-md-11 mt-4 border-0">
        <img
          src={book.imageUrl}
          alt=""
          width="70"
          height="70"
          className="rounded float-left mr-1"
        />
        Book: <strong>{book.title}</strong>
        <span className="float-right">
          <button onClick={handleClick} className="btn btn-outline-info btn-sm">
            {book.read ? "Read" : "Unread"}
          </button>
        </span>
        <br />
        Author: <strong>{book.author}</strong>
      </li>
    </div>
  );
};

export default Book;
