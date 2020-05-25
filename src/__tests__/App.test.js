import React from "react";
import App from "../App.js";
import renderer from "react-test-renderer";

describe("first test", () => {
  it("should pass", () => {
    expect(true).toEqual(true);
  });
});

// describe("addBook", () => {
//   it("should add a book to the list", () => {
//     const startState = {
//       books: [{ id: 1, title: "title1", author: "author1", read: false }],
//     };
//     const newBook = { id: 2, title: "title2", author: "author2", read: false };
//     const expected = [
//       { id: 2, title: "title2", author: "author2", read: false },
//       { id: 1, title: "title1", author: "author1", read: false },
//     ];

//     const result = addBook(newBook);
//     expect(result).toEqual(expected);
//   });
// });
