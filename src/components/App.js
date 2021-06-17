import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import getApiData from "../services/getDataFromApi";
import ls from "../services/localStorage";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );
  console.log(characters);

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, [characters.length]);

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
      if (filterGender === "") {
        return true;
      } else {
        return character.gender === filterGender;
      }
    })
    .filter((character) => {
      if (filterSpecies === "") {
        return true;
      } else {
        return character.species === filterSpecies;
      }
    });

  const renderCharacterDetail = (props) => {
    const routeCharId = parseInt(props.match.params.charId);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharId;
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return (
        <>
          <Link to="/">Back</Link>
          <h2 className="character__notfound">This character doesn't exist.</h2>
        </>
      );
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            filterGender={filterGender}
            filterName={filterName}
            filterSpecies={filterSpecies}
            handleFilter={handleFilter}
          />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route exact path="/character/:charId" render={renderCharacterDetail} />
        <Route>
          <>
            <Link to="/">Back</Link>
            <h2 className="character__notfound">
              This character doesn't exist.
            </h2>
          </>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
