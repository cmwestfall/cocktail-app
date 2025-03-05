import { useLocalStorage } from "../hooks/useLocalStorage";

export function CocktailCard({ title, cocktail }) {
  const [preference, setPreference] = useLocalStorage(
    `cocktail-${cocktail}`,
    null
  );

  if (!cocktail) return null;

  const handlePreference = (pref) => {
    setPreference(pref === preference ? null : pref);
  };

  return (
    <div>
      <h2>
        {title}: {cocktail.name}
      </h2>
      <p>Ingredients: {cocktail.ingredients.map((i) => i.name).join(",")}</p>
      <button
        onClick={() => handlePreference("like")}
        style={{ color: preference === "like" ? "green" : "black" }}
      >
        Like
      </button>
      <button
        onClick={() => handlePreference("dislike")}
        style={{ color: preference === "dislike" ? "red" : "black" }}
      >
        Dislike
      </button>
    </div>
  );
}
