import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import './Book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const onRemoveClicked = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="main-book" key={book.item_id}>
      <div>
        <p className="category">{book.category}</p>
        <h1 className="Title">{book.title}</h1>
        <p className="author">
          Author:
          {' '}
          {book.author}
        </p>
        <div className="btn">
          <button type="button" className="comments">Comments</button>
          <div className="vertical" />
          <button
            type="button"
            className="comments"
            onClick={() => onRemoveClicked(book.item_id)}
          >
            Remove
          </button>
          <div className="vertical" />
          <button type="button" className="comments">Edit</button>
        </div>
      </div>
      <div className="circle">
        <div className="oval" />
        <div>
          <h1 className="percentage">64%</h1>
          <p className="Completed">Complete</p>
        </div>
      </div>
      <div className="last">
        <span className="Chapter">Current Chapter</span>
        <span className="Lesson">Chapter 17</span>
        <div className="update">Update Progress</div>
      </div>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
