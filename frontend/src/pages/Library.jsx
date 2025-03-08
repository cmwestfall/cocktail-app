import { CocktailLibrary } from "../components/CocktailLibrary";
import { useCocktails } from "../hooks/useCocktails";

export default function Library() {
  const [cocktails] = useCocktails();
  return (
    <>
      <h1>Library</h1>
      {cocktails.length > 0 ? (
        <CocktailLibrary cocktailList={cocktails} />
      ) : (
        <p>Loading cocktails...</p>
      )}
    </>
  );
}
