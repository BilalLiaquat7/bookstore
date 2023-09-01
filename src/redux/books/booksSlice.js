import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ovYVupEoBz9os0QZ20R1/books';

const initialState = {
  books: [],
  status: 'idel',
  error: null,
};

export const addABook = createAsyncThunk('addBook', async (initialBook) => {
  try {
    await axios.post(BOOKS_URL, initialBook);
    return initialBook;
  } catch (error) {
    return error.message;
  }
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BOOKS_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBook = createAsyncThunk('deleteBook', async (bookId) => {
  const url = `${BOOKS_URL}/${bookId}`;
  try {
    await axios(url);
    return bookId;
  } catch (error) {
    return error.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.splice(
        state.books.findIndex((book) => book.item_id === action.payload),
        1,
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const booksData = action.payload;
      const arrayofBooks = Object.keys(booksData).map((itemId) => ({
        item_id: itemId,
        ...booksData[itemId][0],
      }));

      return {
        ...state,
        isLoading: false,
        books: arrayofBooks,
      };
    })
      .addCase(addABook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books.splice(state.books.findIndex((book) => book.item_id === action.payload), 1);
      });
  },
});

export const selectAllBooks = (state) => state.books.books;

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
