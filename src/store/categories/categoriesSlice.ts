import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchCategories } from './categoriesActions';
import { CategoriesState, IBook } from '../../types';

const bookCategies = ["Art", "Biography", "Computers", "History", "Medical", "Poetry"]

const initialState: CategoriesState = {
	categories: bookCategies || [],
	isLoading: true,
	isSuccess: false,
	errorMessage: '',
}

export const CategoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {

	},
	extraReducers: {
		[fetchCategories.pending.toString()]: (state, action: PayloadAction<Array<IBook>>) => {
			state.isLoading = true
		},
		[fetchCategories.fulfilled.toString()]: (state, action: PayloadAction<Array<string>>) => {
			state.isLoading = false
			state.categories = action.payload
		},
		[fetchCategories.rejected.toString()]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},
	}
})
// Selector
export const BookSelector = (state: CategoriesState) => state.categories

// Actions 
export const { } = CategoriesSlice.actions

// Reducer
export default CategoriesSlice.reducer
