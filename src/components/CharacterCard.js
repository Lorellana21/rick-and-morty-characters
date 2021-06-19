import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  const emojis = {
    Human: "🧑🏾‍🤝‍🧑🏻",
    Alien: "👽",
  };
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="character__card">
        <div className="character__card__img-container">
          <img
            className="character__card__img"
            src={props.character.image}
            alt={`Imagen de ${props.character.name}`}
            title={`Imagen de ${props.name}`}
          />
        </div>
        <h4 className="character__card__name">{props.character.name}</h4>
        <p className="character__card__species">
          Species: {emojis[props.character.species]}
        </p>
        <p className="character__card__gender">
          Gender: {props.character.gender}
        </p>
      </li>
    </Link>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default CharacterCard;
