import React from "react";
import "./searchBoxStyles.css";

interface SearchBoxProps {
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({
  className,
  placeholder,
  onChangeHandler,
}: Readonly<SearchBoxProps>) {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
