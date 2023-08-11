import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
	fetchBooks, fetchMoreBooks, fetchFilteredBooks,
	fetchSearchedBooks
} from './bookActions';
import { BookState, IBook } from "../../types";

const bookCategies = ["art", "biography", "computers", "history", "medical", "poetry"]

const initialState: BookState = {
	books: [],
	sort: "relevance",
	category: '',
	isLoading: true,
	isSuccess: false,
	errorMessage: '',
}

export const BookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setSortedBooks: (state, action) => {
			state.sort = action.payload
		},
		setSearchedBooks: (state, action) => {
			// state.filteredBooks = action.payload
		},
		setBookCategory: (state, action) => {
			state.category = action.payload
		}
	},
	extraReducers: {
		// Fetch Books
		[fetchBooks.pending.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = true
		},
		[fetchBooks.fulfilled.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = false
			state.books = action.payload
		},
		[fetchBooks.rejected.toString()]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},

		// Fetch Filters Books
		[fetchFilteredBooks.pending.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = true
		},
		[fetchFilteredBooks.fulfilled.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = false
			state.books = action.payload
		},
		[fetchFilteredBooks.rejected.toString()]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},

		// Fetch Searched Books
		[fetchSearchedBooks.pending.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = true
		},
		[fetchSearchedBooks.fulfilled.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = false
			state.books = action.payload
		},
		[fetchSearchedBooks.rejected.toString()]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},

		// Fetch More Books
		[fetchMoreBooks.pending.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = true
		},
		[fetchMoreBooks.fulfilled.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = false
			const aarr = [...state.books, ...action.payload]
			state.books = [...new Map(aarr.map((book: IBook) => [book['id'], book])).values()]

		},
		[fetchMoreBooks.rejected.toString()]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},
	}
})
// Selector
export const BookSelector = (state: BookState) => state.books

// Actions 
export const { setSortedBooks, setSearchedBooks, setBookCategory } = BookSlice.actions

// Reducer
export default BookSlice.reducer
