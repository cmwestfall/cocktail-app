import { useEffect, useState } from "react";
import { CocktailCard } from "./components/CocktailCard";

export default function App() {
  const [cocktails, setCocktails] = useState([]);
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [dailyCocktail, setDailyCocktail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/cocktails")
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Cocktail data:", data);
        setCocktails(data);
        initializeDailyCocktail(data);
      })
      .catch((error) => console.error("Error fetching cocktails", error));
  }, []);

  const renderIngredients = (ingredients) =>
    ingredients.map((ingredient) => ingredient.name).join(",");

  const getRandomCocktail = (cocktailList) => {
    const randomIdx = Math.floor(Math.random() * cocktails.length);
    return cocktailList[randomIdx];
  };

  const initializeDailyCocktail = (cocktailList) => {
    const today = new Date().toISOString().split("T")[0];
    const storedCocktail = localStorage.getItem("dailyCocktail");
    const storedDate = localStorage.getItem("dailyCocktailDate");

    if (storedCocktail && storedDate === today) {
      setDailyCocktail(JSON.parse(storedCocktail));
    } else {
      const newDailyCocktail = getRandomCocktail(cocktailList);
      setDailyCocktail(newDailyCocktail);
      localStorage.setItem("dailyCocktail", JSON.stringify(newDailyCocktail));
      localStorage.setItem("dailyCocktailDate", today);
    }
  };

  return (
    <div>
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
