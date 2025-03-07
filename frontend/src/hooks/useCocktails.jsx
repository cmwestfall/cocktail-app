import { useEffect, useState } from "react";
import { today } from "../util/formatDate";
import { initializeDailyCocktail } from "../util/initializeDailyCocktail";

export function useCocktails() {
  const [cocktails, setCocktails] = useState([]);
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
        setDailyCocktail(initializeDailyCocktail(data, today));
      })
      .catch((error) => console.error("Error fetching cocktails", error));
  }, []);

  return [cocktails, dailyCocktail];
}
