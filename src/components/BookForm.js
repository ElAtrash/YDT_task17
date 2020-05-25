import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function BookForm({ addBook }) {
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    read: false,
  });

  function handleChange(e) {
    const value = e.target.value;
    setBook({
      ...book,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (book.title.trim() || book.author.trim()) {
      addBook({ ...book, id: uuid() });
      setBook({ ...book, title: "", author: "" });
    }
  }

  return (
    <div className="card card-body mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-sm m-1">
          <div className="input-group-prepend">
            <div className="input-group-text">Book</div>
          </div>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>

        <div className="input-group input-group-sm m-1">
          <div className="input-group-prepend">
            <div className="input-group-text">Author</div>
          </div>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block btn-sm btn-info m-1">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
