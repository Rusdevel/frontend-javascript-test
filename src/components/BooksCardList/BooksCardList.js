import React from "react";
import BooksCard from "../BooksCard/BooksCard";
import "./BooksCardList.css";


function BooksCardList(props) {
  //const results = 
  return (
    <section className="movies-cardList">
      <div className="movies-cardList__container">
        <h2 className="movies-cardList__title-results"> Found {props.books.totalItems} results</h2>
        <div className="movies-cardList__card">
          
                  
                    <BooksCard/>
                
        </div>
      </div>
    </section>
  );
}

export default BooksCardList;
