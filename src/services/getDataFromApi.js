const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          id: character.id,
        };
      });
      return cleanData;
    });
};

export default getApiData;
