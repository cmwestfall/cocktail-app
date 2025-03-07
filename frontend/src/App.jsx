import { useState } from "react";
import { CocktailCard } from "./components/CocktailCard";
import { useCocktails } from "./hooks/useCocktails";
import { getRandomCocktail } from "./util/getRandomCocktail";
import { Header } from "./components/Header";

export default function App() {
  const [cocktails, dailyCocktail] = useCocktails();

  const [randomCocktail, setRandomCocktail] = useState(null);

  const renderIngredients = (ingredients) =>
    ingredients.map((ingredient) => ingredient.name).join(",");

  return (
    <div>
      <Header />
      <h1>Cocktail Library</h1>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>
            <strong>{cocktail.name}</strong> -{" "}
            {renderIngredients(cocktail.ingredients)}
          </li>
        ))}
      </ul>
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
