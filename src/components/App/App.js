import React from "react";
import './App.css';
import Header from "../Header/header";
import Main from "../Main/main";
import Footer from "../Footer/Footer";
import api from "../../utils/apiBooks";



function App() {

// хук с данными о книгах
const [books, setBooks] = React.useState([]);
// хук с количеством найденых книг
const [foundBooks, setFoundBooks] = React.useState('');
 React.useEffect(() => {
 
     const promise = api.getBooks('');
     Promise.all([promise])
       .then((initialBooks) => {    
         
       })
       
       .catch((result) => console.log(`${result} при загрузке данных`));
  
 },[]);

 React.useEffect(() => {
  // записываем данные в хранилище
   localStorage.setItem('books', JSON.stringify(books));
   localStorage.setItem('foundBooks', JSON.stringify(foundBooks));
   console.log(books)
    
  },);



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
