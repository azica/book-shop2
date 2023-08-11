import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBook } from '../../types';

const myApi = '&key=AIzaSyCCd_ULprMbM0ByWW32fJSK1g8BDG4U8sY'
const baseUrl = 'https://www.googleapis.com/books/v1/volumes'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async function (sort: string, { rejectWithValue }) {
	try {
		let order = sort == "newest" ? "&orderBy=newest" : ""
		const response = await axios.get(`${baseUrl}?q=sewaaaaaaaaaaawarch-terms${order}${myApi}`);
		const data = await response.data.items

		const stackArray = data.map((book: any) => {
			const cats = book.volumeInfo.categories
			const bookObj = {
				id: book.id,
				title: book.volumeInfo.title,
				cover: book.volumeInfo.imageLinks.thumbnail,
				categories: cats,
				authors: book.volumeInfo.authors,
				publishedDate: book.volumeInfo.publishedDate
			}
			return bookObj
		})

		const bookArray = [...new Map(stackArray.map((book: IBook) => [book['id'], book])).values()]

		return bookArray


	} catch (e: any) {
		return rejectWithValue(e.message)
	}
})
export const fetchFilteredBooks = createAsyncThunk('books/fetchFilteredBooks', async function ({ sort, category }: 
	{ sort: string, category: string }, { rejectWithValue }) {
	try {
		let order = sort == "newest" ? "&orderBy=newest" : "";
		let categorySelect = category == "All" ? "search-terms" : `subject:${category.toLocaleLowerCase()}`;

		const response = await axios.get(`${baseUrl}?q=${categorySelect}${order}${myApi}`);
		const data = await response.data

		if (data.totalItems == 0) return []

		const stackArray = data.items.map((book: any) => {
			const cats = book.volumeInfo.categories
			const bookObj = {
				id: book.id,
				title: book.volumeInfo.title,
				cover: book.volumeInfo.imageLinks.thumbnail,
				categories: cats,
				authors: book.volumeInfo.authors,
				publishedDate: book.volumeInfo.publishedDate
			}
			return bookObj
		})

		const bookArray = [...new Map(stackArray.map((book: IBook) => [book['id'], book])).values()]

		return bookArray


	} catch (e: any) {
		return rejectWithValue(e.message)
	}
})
export const fetchMoreBooks = createAsyncThunk('books/fetchMoreBooks', async function ({ startIndex, category }: 
	{ startIndex: number, category: string }, { rejectWithValue }) {
	try {
		let categorySelect = category == "All" ? "search-terms" : `subject:${category}`;
		const response = await axios.get(`${baseUrl}?q=${categorySelect}&maxResults=10&startIndex=${startIndex}`);
		const data = response.data.items

		const stackArray = data.map((book: any) => {
			const cats = book.volumeInfo.categories
			const bookObj = {
				id: book.id,
				title: book.volumeInfo.title,
				cover: book.volumeInfo.imageLinks.thumbnail,
				categories: cats,
				authors: book.volumeInfo.authors,
				publishedDate: book.volumeInfo.publishedDate
			}
			return bookObj
		})
		const bookArray = [...new Map(stackArray.map((book: IBook) => [book['id'], book])).values()]

		return bookArray

	} catch (e: any) {
		return rejectWithValue(e.message)
	}
})

export const fetchSearchedBooks = createAsyncThunk('books/fetchSearchedBooks', async function ({ searchQuery, sort, }: 
	{ searchQuery: string, sort: string }, { rejectWithValue }) {
	try {
		let order = sort == "newest" ? "&orderBy=newest" : ""
		const response = await axios.get(`${baseUrl}?q=${searchQuery}${order}${myApi}`);
		const data = await response.data.items

		const stackArray = data.map((book: any) => {
			const cats = book.volumeInfo.categories
			const bookObj = {
				id: book.id,
				title: book.volumeInfo.title,
				cover: book.volumeInfo.imageLinks.thumbnail,
				categories: cats,
				authors: book.volumeInfo.authors,
				publishedDate: book.volumeInfo.publishedDate
			}
			return bookObj
		})

		const bookArray = [...new Map(stackArray.map((book: IBook) => [book['id'], book])).values()]

		return bookArray


	} catch (e: any) {
		return rejectWithValue(e.message)
	}
})

