import React, { useState } from "react";
import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
// import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid #34c93b",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "#121212",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
  scrollbarWidth: "none",
}));

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Search({ searchData, placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filtered = searchData.filter((option) =>
        option.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleSelectOption = (option) => {
    setInputValue(option.title);
    setFilteredOptions([]);
    if (option.slug) {
      navigate(`/album/${option.slug}`, { state: { albumData: option } });
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      handleSelectOption(filteredOptions[focusedIndex]);
    }
  };
  // const navigate = useNavigate();
  // const onSubmit = (e, value) => {
  //   e.preventDefault();
  //   console.log(value);
  //   navigate(`/album/${value.slug}`);
  //   //Process form data, call API, set state etc.
  // };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        <div>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {filteredOptions.length > 0 && (
        <Listbox>
          {filteredOptions.map((option, index) => {
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li
                key={option.title}
                className={`${styles.listElement} ${
                  index === focusedIndex ? "Mui-focused" : ""
                }`}
                onClick={() => handleSelectOption(option)}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      )}
    </div>
  );
}

export default Search;
