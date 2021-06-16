import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import getApiData from "../services/getDataFromApi";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    //ejecutar cosas en el montaje
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
      //console.log(charactersData);
    });
  }, []);

  return (
    <>
      <Header />
      <CharacterList characters={characters} />
      <Footer />
    </>
  );
};

export default App;
