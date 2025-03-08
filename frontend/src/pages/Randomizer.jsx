import { useState } from "react";
import { useCocktails } from "../hooks/useCocktails";
import { getRandomCocktail } from "../util/getRandomCocktail";
import { CocktailCard } from "../components/CocktailCard";

export default function Randomizer() {
  const [cocktails] = useCocktails();
  const [randomCocktail, setRandomCocktail] = useState(null);

  return (
    <>
      <h1>Randomizer</h1>

      <button onClick={() => setRandomCocktail(getRandomCocktail(cocktails))}>
        Get a Random Cocktail
      </button>
      {randomCocktail && <CocktailCard cocktail={randomCocktail} />}
    </>
  );
}
