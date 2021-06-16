import React from "react";

const FilterByName = (props) => {
  return (
    <>
      <label className="form__label-name display-block" htmlFor="name">
        Busca por nombre de personaje
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        placeholder="Search by character´s name"
      />
    </>
  );
};
export default FilterByName;
