import React from "react";
import './App.css';
import Header from "../Header/header";
import Main from "../Main/main";
import Footer from "../Footer/Footer";
import api from "../../utils/apiBooks";



function App() {

// хук с данными о книгах
const [books, setBooks] = React.useState([]);

React.useEffect(() => {
 
    const promise = api.getBooks('');
    Promise.all([promise])
      .then((initialBooks) => {    
        
        setBooks(initialBooks[0]);
        console.log(initialBooks[0]);
      })
      .catch((result) => console.log(`${result} при загрузке данных`));
  
},[]);

  return (
    <div className="App">
      <Header setBooks={setBooks}/>
      <Main books={books}/>
<Footer />
    </div>
  );
}

export default App;
