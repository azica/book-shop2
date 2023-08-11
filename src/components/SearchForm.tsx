import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";

interface SearchProps {
  setSearchQuery: (value: string) => void;
}
const SearchForm: React.FC<SearchProps> = ({ setSearchQuery }) => {
	
  const [search, setSearch] = useState("");
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const ClickHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  return (
    <form onClick={ClickHandler} className="header__search-form search-form">
      <input
        type="search"
        placeholder="Search Book.."
        onChange={ChangeHandler}
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
};
export default SearchForm;
