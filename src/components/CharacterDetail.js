import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  return (
    <section className="details">
      <div className="character__details">
        <div className="left-container">
          <Link to="/" className="close">
            X
          </Link>
          <h2 className="character__details--name">{props.character.name}</h2>
          <div className="character__details__img-container">
            <img src={props.character.image} alt={props.character.name} />
          </div>
        </div>

        <div className="character__details--info">
          <ul className="character__details--ul">
            <li className="character__details--li">
              <h3 className="character__details--tittle">Species:</h3>
              {props.character.species}
            </li>
            <li className="character__details--li">
              <h3 className="character__details--tittle">Origin:</h3>{" "}
              {props.character.origin}
            </li>
            <li className="character__details--li">
              <h3 className="character__details--tittle">
                Episodes: {props.character.episode.length}
              </h3>
            </li>
            <li className="character__details--li">
              <h3 className="character__details--tittle">Status:</h3>
              {props.character.status}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

CharacterDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episodes: PropTypes.number,
    species: PropTypes.string,
    image: PropTypes.string,
  }),
};
export default CharacterDetail;
