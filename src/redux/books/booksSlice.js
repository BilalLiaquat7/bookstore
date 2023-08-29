import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    addBook: (state) => state,
    removeBook: (state) => state,
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
