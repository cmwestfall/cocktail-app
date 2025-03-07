export function CocktailLibrary({ cocktailList }) {
  const renderIngredients = (ingredients) =>
    ingredients.map((ingredient) => ingredient.name).join(",");
  return (
    <>
      <h1>Cocktail Library</h1>
      <ul>
        {cocktailList.map((cocktail) => (
          <li key={cocktail.id}>
            <strong>{cocktail.name}</strong> -{" "}
            {renderIngredients(cocktail.ingredients)}
          </li>
        ))}
      </ul>
    </>
  );
}
