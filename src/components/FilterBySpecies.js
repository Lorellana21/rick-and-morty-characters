import React from "react";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label className="form__input-label" htmlFor="species">
        Filter by species:
      </label>
      <select
        className="form__input-text"
        name="species"
        id="species"
        value={props.filterSpecies}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
