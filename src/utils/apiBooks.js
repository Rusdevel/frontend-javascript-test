class Api {
    constructor(options) {
      this._headers = options.headers;
      this._url = options.url;
      this._key = options.key
    }

    getBooks(search) {
        return fetch(`${this._url}${search}${this._key}`, {
            headers: this._headers,
          credentials: "omit",
        }).then((res) => {
          return res.json(); // возвращаем результат работы метода и идём в следующий then
        })
        // .then((data) => {
        //   console.log(data); // если мы попали в этот then, data — это объект
        // })
        .catch((err) => {
          console.log(err);
          console.log('Ошибка. Запрос не выполнен');
        }); 
      }

      

      
    
    // проверяем приняли ли запрос
    _checkRes(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }
  
    // другие методы работы с API
  }
  const api = new Api({
    url: `https://www.googleapis.com/books/v1/volumes?q=`,
    headers: {
      "Content-Type": "application/json",
    },
    key: `:keyes&key=AIzaSyAkaV3Hgslq_9R0K8bjvIuaty56XMOKImA`,
  });
  export default api;