import nuggets from "../assets/chicken.svg";
import hamburger from "../assets/hamburger.svg";
import pizza from "../assets/pizza.svg";
import sandwich from "../assets/submarine.svg";

export const foodItems = [
  {
    id: crypto.randomUUID(),
    name: "Hamburger",
    price: 300,
    image: hamburger,
    selected: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Chicken Nuggets",
    price: 300,
    image: nuggets,
    selected: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Submarine Sandwich",
    price: 300,
    image: sandwich,
    selected: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Pizza slices",
    price: 300,
    image: pizza,
    selected: false,
  },
];
