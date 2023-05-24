import React from "react";
import BooksCard from "../BooksCard/BooksCard";
import "./BooksCardList.css";

function BooksCardList(props) {
  
  return (
    <section className="movies-cardList">
      <div className="movies-cardList__container">
        <div className="movies-cardList__card">
          
                  
                    <BooksCard/>
                
        </div>
      </div>
    </section>
  );
}

export default BooksCardList;
