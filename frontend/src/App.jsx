import { useEffect, useState } from "react";

export default function App() {
  const [cocktails, setCocktails] = useState([]);
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/cocktails")
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Cocktail data:", data);
        setCocktails(data);
      })
      .catch((error) => console.error("Error fetching cocktails", error));
  }, []);

  const renderIngredients = (ingredients) =>
    ingredients.map((ingredient) => ingredient.name).join(",");

  const getRandomCocktail = () => {
    const randomIdx = Math.floor(Math.random() * cocktails.length);
    setRandomCocktail(cocktails[randomIdx]);
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
      <button onClick={getRandomCocktail}>Cocktail of the Day</button>

      {randomCocktail && (
        <div>
          <h2>Cocktail of the Day: {randomCocktail.name}</h2>
          <p>Ingredients: {renderIngredients(randomCocktail.ingredients)}</p>
        </div>
      )}
    </div>
  );
}
