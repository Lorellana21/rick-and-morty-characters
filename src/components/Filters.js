import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from "prop-types";

const Filters = (props) => {
  const inputEnterHandler = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="filter-section">
      <form className="form__input" onSubmit={inputEnterHandler}>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
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

Filters.propTypes = {
  handleFilter: PropTypes.func,
  filterName: PropTypes.string,
  filterGender: PropTypes.string,
  filterSpecies: PropTypes.string,
};
export default Filters;
