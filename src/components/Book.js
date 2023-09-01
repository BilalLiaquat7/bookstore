import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const onRemoveClicked = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>
        Author:
        {book.author}
      </h2>
      <button onClick={() => onRemoveClicked(book.item_id)} type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
