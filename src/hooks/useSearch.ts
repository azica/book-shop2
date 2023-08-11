import { IBook } from "../types"

export function useSearch (searchArray:IBook[], query:string) {
	if(query == "") return searchArray
	return [...searchArray].filter(book=>book.title.toLowerCase().includes(query.toLowerCase()))
}