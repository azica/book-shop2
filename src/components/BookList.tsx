
import { useAppSelector } from "../store/hooks";
import BookCard from "./BookCard";
import { IBook } from "../types";
import Loading from "./Loading";

const BookList = () => {
  const { books, isLoading, category } = useAppSelector(
    (state) => state?.books
  );

  return (
    <>
      { category != "" && books.length == 0 ? 
	  	<div className="header__container">
			<h1>There is no such books</h1>
		</div> 	
		:
		<>
		{books == undefined || books.length == 0 ? (
			<Loading />
		  ) : (
			<div className="book-grid__container">
			  <div className="book-grid">
				{books?.map((book: IBook) => (
				  <BookCard key={book.id} book={book} />
				))}
			  </div>
			  {isLoading && <Loading />}
			</div>
		  )}
		</>
	}
    </>
  );
};

export default BookList;
