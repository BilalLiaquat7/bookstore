import booksdata from '../data/booksdata';
import Book from './Book';
import CreateBook from './CreateBook';

const BooksList = () => (
  <div>
    {booksdata.map((book) => (
      <div key={book.id}>
        <Book book={book} />
      </div>
    ))}
    <br />
    <hr />
    <br />
    <CreateBook />
  </div>
);

export default BooksList;
