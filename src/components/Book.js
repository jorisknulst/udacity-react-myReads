import React from "react";

const Book = props => {
  const {
    updateShelf,
    book: { title, authors, imageLinks, shelf, id }
  } = props;
  const multipleAuthors = Array.isArray(authors);
  console.log(shelf);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf ? shelf : "none"}
              onChange={({ target }) => updateShelf(id, target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {multipleAuthors ? authors.join(", ") : authors}
        </div>
      </div>
    </li>
  );
};

export default Book;
