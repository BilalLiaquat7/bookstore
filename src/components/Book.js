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
    <div className="Lesson-Panel" key={book.item_id}>
      <div>
        <p className="School-of">{book.category}</p>
        <h1 className="Title">{book.title}</h1>
        <p className="Suzanne-Collins">
          Author:
          {' '}
          {book.author}
        </p>
        <div className="btn">
          <button type="button" className="Comments">Comments</button>
          <div className="vertical" />
          <button
            type="button"
            className="Comments"
            onClick={() => onRemoveClicked(book.item_id)}
          >
            Remove
          </button>
          <div className="vertical" />
          <button type="button" className="Comments">Edit</button>
        </div>
      </div>
      <div className="circle">
        <div className="Oval-2" />
        <div>
          <h1 className="-Percent-Complete">64%</h1>
          <p className="Completed">Complete</p>
        </div>
      </div>
      <div className="last">
        <span className="Current-Chapter Text-Style-7">Current Chapter</span>
        <span className="Current-Lesson">Chapter 17</span>
        <div className="Rectangle-2">Update Progress</div>
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
