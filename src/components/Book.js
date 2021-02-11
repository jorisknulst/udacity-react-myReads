import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const {
    updateShelf,
    shelf,
    book: { title, authors, imageLinks, id }
  } = props;
  const backgroundImage = imageLinks ? `url(${imageLinks.thumbnail})` : "none";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: backgroundImage
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
          {authors ? authors.join(", ") : "Unknown author"}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
      smallThumbnail: PropTypes.string
    }),
    id: PropTypes.string.isRequired
  }),
  shelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Book;
