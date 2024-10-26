import React, { useEffect, useState } from "react";
import "./App.css";
import { Character } from "./interfaces/character";
import SearchBox from "./components/searchBox/SearchBox";
import CardList from "./components/cardList/CardList";

function App() {
  const [searchField, setSearchField] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] =
    useState<Character[]>(characters);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        let response = await fetch("http://localhost:5001/api/characters?page=1"); // Pagination should be added later on.
        let data = await response.json();
        console.log(data);
        setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCharacters();
  }, []);

  useEffect(() => {
    const newFilteredCharacters = characters.filter((character) => {
      return character.Name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCharacters(newFilteredCharacters);
  }, [characters, searchField]);

  const onSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
    const searchFieldString = event.currentTarget.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Rick and Morty Characters</h1>

      <SearchBox
        className="characters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search characters"
      />
      <CardList characters={filteredCharacters} />
    </div>
  );
}

export default App;
