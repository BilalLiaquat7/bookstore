import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const CreateBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  let counter = -1;

  const onSaveBookClicked = () => {
    if (title && name) {
      dispatch(addBook({ id: counter += 1, title, author: name }));
    }
    setTitle('');
    setName('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={onSaveBookClicked} type="button">Submit</button>
    </>
  );
};

export default CreateBook;
