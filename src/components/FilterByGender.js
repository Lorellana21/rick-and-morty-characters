import React from "react";
import PropTypes from "prop-types";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <label className="form__input-label" htmlFor="gender">
        Filter by gender:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        value={props.filterGender}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </>
  );
};

FilterByGender.propTypes = {
  handleFilter: PropTypes.func,
};
export default FilterByGender;
