import React, { useState } from "react";
import { Search, Input, Icon } from "./styles";
import { FiSearch } from "react-icons/fi";

import { useHistory } from "react-router-dom";

export const Searcher = ({ setSearch }) => {
  const [state, setState] = useState({ value: "" });

  const history = useHistory();

  const onSubmit = (value) => {
    if (value !== "") {
      history.push(`/search/${value}`);
    }
  };

  const handleChange = (event) => {
    setState({ value: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state.value);
  };
  return (
    <Search onSubmit={handleSubmit}>
      <Icon>
        <FiSearch />
        <Input
          type="search"
          id="search"
          placeholder="Search.."
          value={state.value}
          onChange={handleChange}
        />
      </Icon>
    </Search>
  );
};
