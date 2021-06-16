import React from "react";

const FilterByGender = (props) => {
  return (
    <>
      <label className="form__input-label" htmlFor="gender">
        Filter by gender:
      </label>
      <select className="form__input-text" name="gender" id="gender">
        <option value="all">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </>
  );
};
export default FilterByGender;
