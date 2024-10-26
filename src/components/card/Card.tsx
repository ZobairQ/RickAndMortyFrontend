import { Character } from "../../interfaces/character";
import "./card.styles.css";

interface CardProps {
  character: Character;
}

const Card = ({ character }: CardProps) => {
  const {image, name, status} = character;

  return (
    <div className="card-container">
      <img alt={`Character ${name}`} src={`${image}`} />
      <h2>{name}</h2>
      <p>{status}</p>
    </div>
  );
};

export default Card;
