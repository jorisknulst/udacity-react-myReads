import React from "react";

import BooksPageTitle from "./BooksPageTitle";
import BookShelf from "./BookShelf";
import AddBooks from "./AddBooks";

function BooksPage() {
  return (
    <div className="books-page">
      <div className="list-books">
        <BooksPageTitle title="Joris's reading list" />
        <div className="list-books-content">
          <BookShelf shelf="Currently reading" books={[]} />
          <BookShelf shelf="Want to read" books={[]} />
          <BookShelf shelf="Read" books={[]} />
        </div>
        <AddBooks />
      </div>
    </div>
  );
}

export default BooksPage;
