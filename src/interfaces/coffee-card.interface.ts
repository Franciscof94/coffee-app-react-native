import { ImageSourcePropType } from "react-native";

export interface CoffeCardI {
  id: number;
  name: string;
  price: string;
  volume: string;
  stars: string;
  image: ImageSourcePropType | undefined;
  desc: string;
}
