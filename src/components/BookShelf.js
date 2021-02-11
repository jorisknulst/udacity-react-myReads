import React from "react";

import Book from "./Book";

function BookShelf(props) {
  const { shelf, books } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            return <Book key={book.id} book={book} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
