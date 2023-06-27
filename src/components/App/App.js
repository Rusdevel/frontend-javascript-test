import React from "react";
import './App.css';
import Header from "../Header/header";
import Main from "../Main/main";
import Footer from "../Footer/Footer";
import api from "../../utils/apiBooks";



function App() {

// хук с данными о книгах
const [books, setBooks] = React.useState([]);
const [foundBooks, setFoundBooks] = React.useState('');

React.useEffect(() => {
 
    const promise = api.getBooks('');
    Promise.all([promise])
      .then((initialBooks) => {    
        setFoundBooks(initialBooks[0].totalItems)
        setBooks(initialBooks[0].items);
        console.log(initialBooks[0].items);
      })
      .catch((result) => console.log(`${result} при загрузке данных`));
  
},[]);

  return (
    <div className="App">
      <Header setBooks={setBooks} books={books} setFoundbooks={setFoundBooks}/>
      <Main books={books}
      foundbooks={foundBooks}/>
<Footer />
    </div>
  );
}

export default App;
