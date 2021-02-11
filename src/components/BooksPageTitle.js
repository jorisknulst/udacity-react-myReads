import React from "react";

function BooksPageTitle(props) {
  const { title } = props;

  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
}

export default BooksPageTitle;
