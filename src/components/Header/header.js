import "./header.css"
import SearchForm from "../SearchForm/SearchForm";
function Header () {

return(
<header className="header">
<h1 className="header__title">
Search for books  
</h1>
<SearchForm/>
</header>

);


}
export default Header;