import React from "react";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <label className="form__input-label" htmlFor="name">
        Search by character´s name:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        placeholder="Search"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

FilterByName.propTypes = {
  handleFilter: PropTypes.func,
  filterName: PropTypes.string,
};
export default FilterByName;
