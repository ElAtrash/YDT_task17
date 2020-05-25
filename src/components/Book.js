import React from "react";

function Book({ book, toggleRead }) {
  function handleClick() {
    toggleRead(book.id);
  }
  return (
    <div>
      <li className="list-group-item mx-auto col-md-8 mt-4">
        {book.title} <br /> {book.author}
        <div className="text-right">
          <button className="btn btn-outline-info btn-sm" onClick={handleClick}>
            {book.read ? "Read" : "unread"}
          </button>
        </div>
      </li>
    </div>
  );
}

export default Book;
