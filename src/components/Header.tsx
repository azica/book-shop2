import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Select from "./Select";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchFilteredBooks,
  fetchSearchedBooks,
} from "../store/books/bookActions";
import { setBookCategory } from "../store/books/bookSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state?.categories);
  const [category, setCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchSearchedBooks({ searchQuery, sort }));
    }
  }, [searchQuery, sort]);

  useEffect(() => {
    if (category) {
      dispatch(fetchFilteredBooks({ sort, category }));
      dispatch(setBookCategory(category));
    }
  }, [category, sort]);

  return (
    <header className="header">
      <div className="header__container">
        <h1>Search For books</h1>
        <SearchForm setSearchQuery={setSearchQuery} />
        <Select
          selectOptions={categories}
          labelText="Categories"
          defaultValue="All"
          setSelect={setCategory}
        />
        <Select
          selectOptions={["newest"]}
          labelText="Sorting by"
          defaultValue="relevance"
          setSelect={setSort}
        />
      </div>
    </header>
  );
};

export default Header;
