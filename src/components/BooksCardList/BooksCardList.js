import React from "react";
import BooksCard from "../BooksCard/BooksCard";
import "./BooksCardList.css";


function BooksCardList(props) {
  //const {books} = props;
  return (
    <section className="movies-cardList">
      <div className="movies-cardList__container">
        <h2 className="movies-cardList__title-results"> Found {props.foundbooks} results</h2>
        <div className="movies-cardList__card">
        {props.books.map((book) => { 
          //let pictures = book.volumeInfo.imageLinks.smallThumbnail;
           return ( 
              <BooksCard
              preview={book.volumeInfo.previewLink}
              pictures={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
               title ={book.volumeInfo.title}
               categories={book.volumeInfo.categories}
              authors={book.volumeInfo.authors}
              />
             );
          })}
           
                
        </div>
      </div>
    </section>
  );
}

export default BooksCardList;
