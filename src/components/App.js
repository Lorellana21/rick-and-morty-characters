import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
