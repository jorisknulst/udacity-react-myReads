import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { search } from "../utils/BooksAPI";

import Book from "./Book";

class SearchPage extends Component {
  /* Since I got error messages that suggested 'this' was undefined I added a
  constructor. I am pretty sure that I shouldn't have done that but could not
  think of another solution in the short term. */
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      queriedBooks: []
    };

    this.getCorrectShelf = this.getCorrectShelf.bind(this);
  }

  componentDidUpdate(prevProps, { query }) {
    const currentQuery = this.state.query;
    const shouldQueryBooks = query !== currentQuery && currentQuery;

    /* Only fetch new query when query has changed and a query exists at all. */
    if (shouldQueryBooks) {
      search(currentQuery).then(queriedBooks => {
        this.setState(() => ({ queriedBooks }));
      });
    }
  }

  /* Since the API doesn't return a shelf property on the book object with the
  search endpoint, we have to map againgst book ids currently listed on our
  shelves. This may not be the best approach though... */
  getCorrectShelf(bookId) {
    let savedBookIds = [];
    this.props.books.forEach(b => savedBookIds.push(b.id));

    if (savedBookIds.includes(bookId)) {
      return this.props.books.find(({ id }) => {
        return id === bookId;
      }).shelf;
    }
  }

  render() {
    const { queriedBooks, query } = this.state;
    const booksFound = queriedBooks && queriedBooks.length;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={e => this.setState({ query: e.target.value })}
              value={query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksFound || !query
              ? queriedBooks.map(book => {
                  return (
                    <Book
                      key={book.id}
                      book={book}
                      shelf={this.getCorrectShelf(book.id)}
                      updateShelf={this.props.updateShelf}
                    />
                  );
                })
              : "No books found. Change your search."}
          </ol>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default SearchPage;
