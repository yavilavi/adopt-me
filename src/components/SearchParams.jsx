import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown.jsx";
import Results from './Results.jsx'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);

  }, [animal, setBreeds, setBreeds]);

  async function requestPets (){
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    })
    setPets(animals || [])
  }

  return (
    <div className="search-params">
      <form onSubmit={(event => {
        event.preventDefault();
        requestPets().then()
      })}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
