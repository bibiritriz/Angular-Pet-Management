import { Owner } from "./owner";

export interface Pet{
  id: number;
  name: string;
  specie: string;
  age: number;
  owner: Owner;
}
