import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  box-shadow: var(--outline-shadow);
  padding: 4px 8px;
  border-radius: var(--surface-radius);
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
`;

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <SearchContainer>
      <FaSearch
        style={{
          marginRight: "var(--surface-gap)",
          color: "var(--heading-font-color)",
        }}
      />
      <SearchInput
        type="text"
        placeholder="Search for..."
        value={query}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default Search;
