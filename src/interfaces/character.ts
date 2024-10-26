import { Origin } from "./origin";

export interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
}
