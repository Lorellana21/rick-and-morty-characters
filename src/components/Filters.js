import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  return (
    <section className="filter-section">
      <form>
        <FilterByName />
        <FilterByGender />
        <FilterBySpecies />
      </form>
    </section>
  );
};
export default Filters;
