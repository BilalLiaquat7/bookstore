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
    <div>
      <br />
      <br />
      {books.map((book) => (
        <div key={book.item_id}>
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
