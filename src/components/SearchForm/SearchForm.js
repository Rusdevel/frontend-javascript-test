import React from "react";
import "./SearchForm.css"

function SearchForm(props) {
  

  return (
    <section className="search-form">
      <form className="search-form__group">
        <div className="search-form__container">
          <input
            className="search-form__input"
            maxLength="30"
            type="text"
            value={""}
            placeholder="введите текст"
            required
            //onChange={}
          />
          <button
            //onClick={}
            className="search-form__button"
            type="submit"
          >
            Поиск
          </button>
        </div>
        <label className="search-form__label">
          Categories
          <select value={''} >
            <option className="search-form__option" value="all">all</option>
            <option className="search-form__option" value="art">art</option>
            <option className="search-form__option" value="biographyс">biographyс</option>
            <option className="search-form__option" value="computers">computers</option>
            <option className="search-form__option" value="medical">medical</option>
            <option className="search-form__option" value="poetry">poetry</option>
          </select>
        </label> 
        <label className="search-form__label" >
          Sorting by
          <select value={''} >
            <option className="search-form__option" value="relevance ">relevance </option>
            <option className="search-form__option" value="newest">newest</option>
          </select>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
