import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.js';
import BookPage from './components/route/books.js';
import CategoryPage from './components/route/categories.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          </Routes>
    </section>
    </div>
  );
}
export default App;
