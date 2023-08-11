import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchBooks, fetchMoreBooks } from "./store/books/bookActions";
import { fetchCategories } from "./store/categories/categoriesActions";

function App() {
  const dispatch = useAppDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const { sort, category } = useAppSelector((state) => state.books);

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
    <div className="App">
      <Header />
      <BookList />
      <div className="load-button__container">
        <button className="load__button" onClick={ClickHandler}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
