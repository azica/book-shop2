import { IBook } from "../types"

export function useFilter (filterArray:IBook[], filter:string) {
	if(filter == "All" || filter == "") return filterArray
	return [...filterArray].filter(book=>book.categories == undefined ? '': book.categories.includes(filter))
}