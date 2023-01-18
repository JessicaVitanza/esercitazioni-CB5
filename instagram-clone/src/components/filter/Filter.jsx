import { useState } from "react";
import "./filter.css";

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div>
      <form className="Filter" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Search..."
        />
        <input className="submit" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Filter;