import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const getBooks = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    setBooks(response.data.items);
    console.log(response.data.items);
  }

  useEffect(() => {
    getBooks();
  }, [search])
  return ( 
    <div className="App">
    <h1>Find a book.</h1>
    <input type="text" placeholder="Search for a book" value={search} onChange={(e) => setSearch(e.target.value)} />
    {books.map((book) => (
      <div key={book.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px" }}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
