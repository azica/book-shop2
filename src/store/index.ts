import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './books/bookSlice'
import categoriesReducer from './categories/categoriesSlice'

export const store = configureStore({
	reducer: {
	  books: bookReducer,
	  categories: categoriesReducer
	}
  })
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch