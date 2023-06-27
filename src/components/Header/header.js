import "./header.css"
import SearchForm from "../SearchForm/SearchForm";
function Header ({setBooks, books, setFoundbooks}) {

return(
<header className="header">
<h1 className="header__title">
Search for books  
</h1>
<SearchForm setBooks={setBooks} books={books}
setFoundbooks={setFoundbooks}/>
</header>

);


}
export default Header;