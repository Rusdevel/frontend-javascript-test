import "./header.css"
import SearchForm from "../SearchForm/SearchForm";
function Header ({setBooks, setFoundbooks, setPreloaderStatus}) {

return(
<header className="header">
<h1 className="header__title">
Search for books  
</h1>
<SearchForm setBooks={setBooks} setPreloaderStatus={setPreloaderStatus}
setFoundbooks={setFoundbooks}/>
</header>

);


}
export default Header;