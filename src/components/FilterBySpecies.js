import React from "react";

const FilterBySpecies = (props) => {
  return (
    <>
      <label className="form__label-species display-block" htmlFor="species">
        Filter by species:
      </label>
      <select className="form__input-text" name="species" id="species">
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
