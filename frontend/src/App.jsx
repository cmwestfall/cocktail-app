import { useEffect, useState } from "react";

export default function App() {
  const [cocktails, setCocktails] = useState([]);

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

  return (
    <div>
      <h1>Cocktail Library</h1>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>
            <strong>{cocktail.name}</strong> - {cocktail.ingredients.join(",")}
          </li>
        ))}
      </ul>
    </div>
  );
}
