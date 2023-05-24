/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./BooksCard.css";

function BooksCard(props) {
  
  return (
      
        <section className="books-card">
          

          <div className="books-card__container">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="books-img"
                src="http://books.google.com/books/content?id=ixKczQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                alt='image'
              ></img>
            </a>

            <div className="books-card__group">
            <p className="books-card__subtitle">computers</p>
            <h2 className="books-card__title">Emotional Word Search For Women</h2>
              <p className="books-card__subtitle">Wa Led</p>
            </div>
          </div>
        </section>
  );
}
export default BooksCard;
