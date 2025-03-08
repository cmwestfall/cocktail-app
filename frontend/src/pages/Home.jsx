import { CocktailCard } from "../components/CocktailCard";
import { useCocktails } from "../hooks/useCocktails";

export default function Home() {
  const [cocktails, dailyCocktail] = useCocktails();

  if (!dailyCocktail) {
    return <p>Loading Cocktail of the Day...</p>;
  }
  return (
    <>
      <h1>Home</h1>
      <section className="info-section">
        <h2>Welcome to Your Bar Tools!</h2>
        <div className="info-section-children">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, sed
            tempora. Facilis, ea? Ullam animi quas ab ipsa optio ipsum quis nisi
            placeat earum molestiae?
          </p>

          <img src="google.com" />
        </div>
      </section>
      <CocktailCard cocktail={dailyCocktail} />
    </>
  );
}
