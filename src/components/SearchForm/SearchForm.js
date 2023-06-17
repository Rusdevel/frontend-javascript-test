import React from "react";
import "./SearchForm.css"

function SearchForm(props) {
const key = ':keyes&key=AIzaSyAkaV3Hgslq_9R0K8bjvIuaty56XMOKImA';
  function getBooks() {
    return fetch(` https://www.googleapis.com/books/v1/volumes?q=flowers${key}`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "omit",
    }).then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    }).then((data) => {
      console.log(data); // если мы попали в этот then, data — это объект
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен');
    }); 
  }
  
  function showBooks () {
    getBooks()
  }

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
            onClick={showBooks}
            className="search-form__button"
            type="submit"
          >
            Поиск
          </button>
        </div>
        <div className="search-form__select">
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
        </div>
        
      </form>
    </section>
  );
}

export default SearchForm;
