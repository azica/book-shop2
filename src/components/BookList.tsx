import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import BookCard from "./BookCard";
import { IBook } from "../types";
import Loading from "./Loading";
import { fetchBooks, fetchMoreBooks } from "../store/books/bookActions";
import { fetchCategories } from "../store/categories/categoriesActions";

const BookList = () => {
  const dispatch = useAppDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const { books, isLoading, sort, category } = useAppSelector(
    (state) => state.books
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBooks(sort));
  }, [sort]);
  useEffect(() => {
    if (startIndex >= 10) {
      dispatch(fetchMoreBooks({ startIndex, category }));
    }
  }, [startIndex, category]);
  const ClickHandler = () => {
    setStartIndex((prev) => (prev += 10));
  };
  return (
    <>
      {category != "" && books.length == 0 ? (
        <div className="header__container">
          <h1>There is no such books</h1>
        </div>
      ) : (
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
      )}
      <div className="load-button__container">
        <button className="load__button" onClick={ClickHandler}>
          Load More
        </button>
      </div>
    </>
  );
};

export default BookList;
