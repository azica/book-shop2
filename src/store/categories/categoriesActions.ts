import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const myApi = 'AIzaSyCCd_ULprMbM0ByWW32fJSK1g8BDG4U8sY'
const baseUrl = 'https://www.googleapis.com/books/v1/volumes'


export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get(`${baseUrl}?q=search-terms`);
		const data = await response.data.items;

		const stackCategories = data.map((book: any) => {
			return book.volumeInfo.categories[0]
		})

		return Array.from(new Set(stackCategories))

	} catch (e: any) {
		return rejectWithValue(e.message)
	}
})