import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import CreateBook from './CreateBook';
import { selectAllBooks, fetchBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="main">
      {books.map((book) => (
        <div key={book.item_id}>
          <Book book={book} />
        </div>
      ))}
      <CreateBook />
    </div>
  );
};

export default BooksList;
