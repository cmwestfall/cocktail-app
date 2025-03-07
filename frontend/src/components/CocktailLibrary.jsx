import { CocktailCard } from "./CocktailCard";

export function CocktailLibrary({ cocktailList }) {
  return (
    <>
      <h1>Cocktail Library</h1>
      <ul>
        {cocktailList.map((cocktail) => (
          <li key={cocktail.id}>
            <CocktailCard cocktail={cocktail} />
          </li>
        ))}
      </ul>
    </>
  );
}
