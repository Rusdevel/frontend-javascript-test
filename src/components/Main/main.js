import React from "react";
import './main.css';
import BooksCardList from "../BooksCardList/BooksCardList";

function Main(props) {
  return (
    <div className="main">
      <BooksCardList books={props.books} />
    </div>
  );
}

export default Main;