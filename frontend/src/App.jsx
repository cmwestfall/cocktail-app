import { useState } from "react";
import { CocktailCard } from "./components/CocktailCard";
import { useCocktails } from "./hooks/useCocktails";
import { getRandomCocktail } from "./util/getRandomCocktail";
import { Header } from "./components/Header";
import { CocktailLibrary } from "./components/CocktailLibrary";

export default function App() {
  const [cocktails, dailyCocktail] = useCocktails();
  const [randomCocktail, setRandomCocktail] = useState(null);

  return (
    <div>
      <Header />
      <CocktailLibrary cocktailList={cocktails} />
      <CocktailCard title="Cocktail of the Day" cocktail={dailyCocktail} />
      <button onClick={() => setRandomCocktail(getRandomCocktail(cocktails))}>
        Get a Random Cocktail
      </button>
      {randomCocktail && (
        <CocktailCard title="Random Cocktail" cocktail={randomCocktail} />
      )}
    </div>
  );
}
