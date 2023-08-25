import booksdata from '../data/booksdata';
import Book from './Book';
import CreateBook from './CreateBook';

export default function BooksList() {
  return (
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
}
