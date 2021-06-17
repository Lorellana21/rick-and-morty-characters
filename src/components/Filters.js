import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";

const inputEnterHandler = (ev) => {
  ev.preventDefault();
};

const Filters = (props) => {
  return (
    <section className="filter-section">
      <form className="form__input" onSubmit={inputEnterHandler}>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
          inputEnterHandler={props.inputEnterHandler}
        />
        <FilterByGender
          filterGender={props.filterGender}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecies
          filterSpecies={props.filterSpecies}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};
export default Filters;
