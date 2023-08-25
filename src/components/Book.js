export default function Book({ book }) {
  return (
      <div>
            <h1>{book.title}</h1>
            <h2>Author: {book.author}</h2>
            <p>Pages: <strong>{book.pages}</strong></p>
            <button type='button'>Delete</button>
        </div>
  );
}