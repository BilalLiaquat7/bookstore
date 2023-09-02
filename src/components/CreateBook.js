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
      <div className="bookform">
        <h1 className="heading">Create Book</h1>
        <div className="input">
          <input
            className="titleinput"
            type="text"
            placeholder="Enter book name"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
          <select
            className="cat"
            name="author"
            onChange={handleChange}
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="btnsubmit"
            onClick={onSaveBookClicked}
          >
            Add Book
          </button>
        </div>
      </div>

    </div>
  );
};

export default CreateBook;
