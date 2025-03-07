import { getRandomCocktail } from "./getRandomCocktail";

export const initializeDailyCocktail = (cocktailList, date) => {
  const storedCocktail = localStorage.getItem("dailyCocktail");
  const storedDate = localStorage.getItem("dailyCocktailDate");

  if (storedCocktail && storedDate === date) {
    return JSON.parse(storedCocktail);
  } else {
    const newDailyCocktail = getRandomCocktail(cocktailList);
    localStorage.setItem("dailyCocktail", JSON.stringify(newDailyCocktail));
    localStorage.setItem("dailyCocktailDate", date);
    return newDailyCocktail;
  }
};
