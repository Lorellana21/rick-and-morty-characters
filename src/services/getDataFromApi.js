const getApiData = () => {
  return fetch("//rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          gender: character.gender,
          id: character.id,
          status: character.status,
          episode: character.episode,
          origin: character.origin.name,
        };
      });

      return cleanData;
    });
};

export default getApiData;
