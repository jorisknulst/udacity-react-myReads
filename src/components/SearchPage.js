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
      queriedBooks: []
    };

    this.getCorrectShelf = this.getCorrectShelf.bind(this);
  }

  componentDidUpdate(prevProps, { query }) {
    const currentQuery = this.state.query;
    const shouldQueryBooks = query !== currentQuery && currentQuery;

    if (shouldQueryBooks) {
      search(currentQuery).then(queriedBooks => {
        this.setState(() => ({ queriedBooks }));
      });
    }
  }

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
