import React from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./styles/App.css";

import SearchPage from "./components/SearchPage";
import BooksPage from "./components/BooksPage";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <SearchPage />
        <BooksPage />
      </div>
    );
  }
}

export default BooksApp;
