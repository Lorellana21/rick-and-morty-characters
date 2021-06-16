import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  return (
    <section className="filter-section">
      <form className="form__input">
        <FilterByName
          handleFilter={props.handleFilter}
          inputEnterHandler={props.inputEnterHandler}
        />
        <FilterByGender handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
