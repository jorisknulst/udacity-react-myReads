import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { search } from "../utils/BooksAPI";

import Book from "./Book";

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      books: []
    };
  }

  componentDidUpdate(prevProps, { query }) {
    const currentQuery = this.state.query;
    const shouldQueryBooks = query !== currentQuery && currentQuery;

    if (shouldQueryBooks) {
      search(currentQuery).then(books => {
        this.setState(() => ({ books }));
      });
    }
  }

  render() {
    const { books, query } = this.state;
    const booksFound = books && books.length;

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
              ? books.map(book => {
                  return (
                    <Book
                      key={book.id}
                      book={book}
                      updateShelf={this.props.updateShelf}
                    />
                  );
                })
              : "No books found. Change your search"}
          </ol>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  updateShelf: PropTypes.func.isRequired
};

export default SearchPage;
