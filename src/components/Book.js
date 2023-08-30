import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const onRemoveClicked = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>
        Author:
        {book.author}
      </h2>
      <button onClick={() => onRemoveClicked(book)} type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
