import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import getApiData from "../services/getDataFromApi";
import ls from "../services/localStorage";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterGender, setFilterGender] = useState("all");
  const [filterSpecies, setFilterSpecies] = useState("");

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set(`characters`, characters);
  }, [characters]);

  return (
    <>
      <Header />
      <Filters />
      <CharacterList characters={characters} />
      <Footer />
    </>
  );
};

export default App;
