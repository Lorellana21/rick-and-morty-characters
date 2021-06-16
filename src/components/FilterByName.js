import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  const inputEnterHandler = (ev) => {
    ev.preventDefault();
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
        onSubmit={inputEnterHandler}
      />
    </>
  );
};
export default FilterByName;
