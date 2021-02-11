import React from "react";

import BooksPageTitle from "./BooksPageTitle";
import BookShelf from "./BookShelf";
import AddBooks from "./AddBooks";

const currentlyReading = "currentlyReading";
const wantToRead = "wantToRead";
const read = "read";

function BooksPage(props) {
  const { books } = props;

  return (
    <div className="books-page">
      <div className="list-books">
        <BooksPageTitle title="Joris's reading list" />
        <div className="list-books-content">
          <BookShelf
            shelf="Currently reading"
            books={books.filter(b => b.shelf === currentlyReading)}
          />
          <BookShelf
            shelf="Want to read"
            books={books.filter(b => b.shelf === wantToRead)}
          />
          <BookShelf shelf="Read" books={books.filter(b => b.shelf === read)} />
        </div>
        <AddBooks />
      </div>
    </div>
  );
}

export default BooksPage;
