import React, { useState } from "react";
import styles from "./Search.module.scss";
import { SearchButton } from "../../buttons/searchButton/SearchButton";
import ClearSearchButton from "../../buttons/clearSearchButton/ClearSearchButton";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const deleteTextValue = () => {
    setSearchText("");
  };

  return (
    <form className={styles.search}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <ClearSearchButton deleteTextValue={deleteTextValue} />
      </div>

      <SearchButton searchText={searchText} />
      {/* <Link to="search">
      </Link> */}
    </form>
  );
};

export default Search;
