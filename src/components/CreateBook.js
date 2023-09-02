import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addABook } from '../redux/books/booksSlice';
import './createbook.css';

const CreateBook = () => {
  const dispatch = useDispatch();
  const categories = ['Devops', 'QA', 'Dev'];

  const [book, setbook] = useState({
    item_id: nanoid(),
    title: '',
    author: '',
    category: categories[0],
  });

  const handleChange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  const onSaveBookClicked = () => {
    if (book.title && book.author) {
      setbook({ ...book, item_id: nanoid() });
      dispatch(addABook(book));
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <div className="form">
        <input
          className="input"
          type="text"
          placeholder="Book title"
          value={book.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author name"
          value={book.author}
          name="author"
          onChange={handleChange}
        />

        <button className="button" onClick={onSaveBookClicked} type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
