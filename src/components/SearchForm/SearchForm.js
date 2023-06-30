import React from "react";
import "./SearchForm.css"
import api from "../../utils/apiBooks";

function SearchForm({setBooks, setFoundbooks, books}) {
  //записываем данные из хранилища в переменные
  const storageBooks=  JSON.parse(localStorage.getItem('books'));
  const foundBooks=  JSON.parse(localStorage.getItem('foundBooks'));

  // переменная для поисковой строки
  const [search, setSearch] = React.useState("");

// извлекаем данные из хранилища, что бы ответ остался при перезагрузке
   React.useEffect(() => {
    setBooks(storageBooks)
    setFoundbooks(foundBooks)
  },[]);
  
  function showBooks (e) {
    e.preventDefault();
    api.getBooks(search)
    .then((data) => {setBooks(data.items); setFoundbooks(data.totalItems); 
  })
   
    
  }

  function changeSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <section className="search-form">
      <form 
      onSubmit={showBooks}
      className="search-form__group">
        <div className="search-form__container">
          <input
            className="search-form__input"
            maxLength="30"
            type="text"
            value={search || ""}
            placeholder="введите текст"
            required
            onChange={changeSearch}
          />
          <button
           // onClick={showBooks}
            className="search-form__button"
           // type="submit"
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
