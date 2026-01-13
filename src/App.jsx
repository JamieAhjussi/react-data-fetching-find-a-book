import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  async function getBooks() {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    setBooks(response.data.items);
  }
  useEffect(() => {
    getBooks();
  }, [search]);
  return <div className="App">
    <h1>Find a Book</h1>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a book" />
    <ul>
      {books.map((book) => (
      <li key={book.id}>{book.volumeInfo.title}</li>
      ))}
    </ul>
  </div>;
}

export default App;
