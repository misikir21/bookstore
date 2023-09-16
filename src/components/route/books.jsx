import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './booklist';
import BookForm from './addBook';
import '../css/bookStyle.css';

const BookPage = () => {
  const [bookInfo, setBookInfo] = useState([{
    id: uuidv4(), title: 'crazy stupid love', author: 'misikir',
  },
  {
    id: uuidv4(), title: 'the theory of everthing', author: 'darwin',
  },
  ]);

  const addBook = ({ title, author }) => {
    const newBook = {
      id: uuidv4(), title, author,
    };
    setBookInfo([...bookInfo, newBook]);
  };

  const deleteBook = (id) => {
    setBookInfo(bookInfo.filter((book) => book.id !== id));
  };

  return (
    <div className="container">
      <ul>
        {bookInfo.map((book) => <BookList book={book} key={book.id} deleteBook={deleteBook} />)}
      </ul>
      <BookForm addBook={addBook} />
    </div>
  );
};
export default BookPage;