import { CocktailCard } from "./CocktailCard";

export function CocktailLibrary({ cocktailList = [] }) {
  return (
    <>
      <h1>Cocktail Library</h1>
      {cocktailList.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </>
  );
}
