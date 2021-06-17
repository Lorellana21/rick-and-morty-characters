import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  let characterElements = "";

  if (props.characters.length !== 0) {
    characterElements = props.characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
  } else {
    characterElements = (
      <h2 className="character__notfound">Sorry, character not found!</h2>
    );
  }

  return (
    <section className="character__section">
      <ul className="character__list">{characterElements}</ul>
    </section>
  );
};
export default CharacterList;

CharacterList.propsTypes = {
  characters: PropTypes.array,
};
