import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Book from './components/route/book';
import BookPage from './components/route/books';
import CategoryPage from './components/route/categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Book  />
      <section>
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/book" element={<book/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
