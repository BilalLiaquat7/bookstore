import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    <h1>{book.title}</h1>
    <h2>
      Author:
      {book.author}
    </h2>
    <p>
      Pages:
      <strong>{book.pages}</strong>
    </p>
    <button type="button">Delete</button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
