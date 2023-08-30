import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.splice(state.findIndex((book) => book.id === action.payload), 1);
    },
  },
});

export const selectAllBooks = (state) => state.books;

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
