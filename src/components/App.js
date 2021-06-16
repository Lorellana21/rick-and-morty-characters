import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import getApiData from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    //ejecutar cosas en el montaje
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);
  
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
