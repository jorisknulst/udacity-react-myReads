import React from "react";
import { Route } from "react-router-dom";

import * as BooksAPI from "./utils/BooksAPI";
import "./styles/App.css";
import SearchPage from "./components/SearchPage";
import BooksPage from "./components/BooksPage";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState(() => ({ books })));
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BooksPage books={this.state.books} />}
        />
        <Route path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
