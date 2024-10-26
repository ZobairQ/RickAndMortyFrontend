import React from "react";
import Card from "../card/Card";
import { Character } from "../../interfaces/character";

interface CardListProps {
  characters: Character[];
}

function CardList({ characters }: Readonly<CardListProps>) {
  return (
    <div className="card-list">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}
export default CardList;
