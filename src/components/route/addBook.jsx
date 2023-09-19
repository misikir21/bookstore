
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/bookStyle.css';
import '../css/addBooks.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const data = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Science-fiction',
  };
  const handleSubmit = () => {
    dispatch(addBookToApi(data));
    dispatch(addBook(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book-form">

export default AddBook;
