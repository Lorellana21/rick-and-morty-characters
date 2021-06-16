import React from "react";

const CharacterCard = (props) => {
  const emojis = {
    Human: "🧑🏾‍🤝‍🧑🏻",
    Alien: "👽",
  };
  return (
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
  );
};
export default CharacterCard;
