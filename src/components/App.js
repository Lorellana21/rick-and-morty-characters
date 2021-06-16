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
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );

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

  useEffect(() => {
    ls.set(`filterName`, filterName);
  }, [filterName]);

  useEffect(() => {
    ls.set(`filterGender`, filterGender);
  }, [filterGender]);

  useEffect(() => {
    ls.set(`filterSpecies`, filterSpecies);
  }, [filterSpecies]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    } else if (data.key === "species") {
      setFilterSpecies(data.value);
    }
  };

  //render
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterGender === "all") {
        return true;
      } else {
        return character.gender === filterGender;
      }
    })
    .filter((character) => {
      if (filterSpecies === "all") {
        return true;
      } else {
        return character.species === filterSpecies;
      }
    });

  return (
    <>
      <Header />
      <Filters
        filterGender={filterGender}
        filterName={filterName}
        filterSpecies={filterSpecies}
        handleFilter={handleFilter}
      />
      <CharacterList characters={filteredCharacters} />
      <Footer />
    </>
  );
};

export default App;
