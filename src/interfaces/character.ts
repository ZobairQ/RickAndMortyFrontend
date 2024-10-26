import { Origin } from "./origin";

export interface Character {
  Id: string;
  Name: string;
  image: string;
  Status: string;
  Species: string;
  Gender: string;
  Origin: Origin;
  Location: Location;
}
