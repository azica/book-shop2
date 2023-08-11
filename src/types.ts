export interface IBook {
	id: string;
	title: string;
	cover: string;
	categories?: Array<string>;
	authors?: Array<string>;
	publishedDate: string
}
export interface ICategories {
	categories: Array<string>
}
export interface BookState {
	books: Array<IBook>,
	isLoading: boolean,
	isSuccess: boolean,
	errorMessage: string,
	sort: string,
	category: string
}
export interface CategoriesState {
	isLoading: boolean,
	isSuccess: boolean,
	errorMessage: string,
	categories: Array<string>
}