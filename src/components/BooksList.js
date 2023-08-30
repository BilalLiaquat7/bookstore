import { useSelector } from 'react-redux/es/hooks/useSelector';
import Book from './Book';
import CreateBook from './CreateBook';
import { selectAllBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const books = useSelector(selectAllBooks);
  return (
    <div>
      <br />
      <br />
      {books.map((book) => (
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
};

export default BooksList;
