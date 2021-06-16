import React from "react";

const FilterByName = (props) => {
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
      />
    </>
  );
};
export default FilterByName;
