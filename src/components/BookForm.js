import React, { useEffect, useState } from "react";
import Book from "./Book";
import { useDispatch } from "react-redux";

const BookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    read: false,
  });

  const handleChange = (e) => {
    e.persist();
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addBook = () => {
    dispatch({
      type: "CREATE_BOOK",
      bookData: {
        title: book.title,
        author: book.author,
        read: false,
      },
    });
  };

  return (
    <div className="card card-body">
      <div className="form">
        <div className="input-group input-group-sm m-1">
          <div className="input-group-prepend">
            <div className="input-group-text">Book</div>
          </div>
          <input
            className="form-control"
            onChange={(e) => handleChange(e)}
            name={"title"}
          />
        </div>

        <div className="input-group input-group-sm m-1">
          <div className="input-group-prepend">
            <div className="input-group-text">Author</div>
          </div>
          <input
            className="form-control"
            onChange={(e) => handleChange(e)}
            name={"author"}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-sm btn-info m-1"
          onClick={addBook}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BookForm;
