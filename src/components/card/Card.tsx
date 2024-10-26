import { Character } from "../../interfaces/character";
import "./cardStyles.css";

interface CardProps {
  character: Character;
}

const Card = ({ character }: CardProps) => {
  const {Id, image, Name, Status} = character;

  return (
    <div className="card-container">
      <img alt={`Character ${Name}`} src={`${image}`} />
      <h2>{Name}</h2>
      <p>{Status}</p>
    </div>
  );
};

export default Card;
