/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./BooksCard.css";

function BooksCard(props) {
  
  return (
      
        <section className="books-card">
          

          <div className="books-card__container">
              <a
              href={props.preview}
              target="_blank"
              rel="noopener noreferrer"
            > 
              <img
                className="books-img"
                src={props.pictures}
                alt={props.title}
              ></img>
             </a>  

            <div className="books-card__group">
             <p className="books-card__subtitle">{props.categories}</p> 
            <h2 className="books-card__title">{props.title}</h2>
               <p className="books-card__subtitle">{props.authors}</p>
            </div>
          </div>
        </section>
  );
}
export default BooksCard;
