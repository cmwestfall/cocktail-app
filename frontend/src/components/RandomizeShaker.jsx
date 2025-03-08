import React, { useState } from "react";
import { CocktailCard } from "./CocktailCard";
import { getRandomCocktail } from "../util/getRandomCocktail";
import { useCocktails } from "../hooks/useCocktails";

export function CocktailShaker() {
  const [cocktails, dailyCocktail] = useCocktails();
  const [isShaking, setIsShaking] = useState(false);
  const [isPoured, setIsPoured] = useState(false);
  const [randomCocktail, setRandomCocktail] = useState(null);

  const handleClick = () => {
    setIsShaking(true);
    setIsPoured(false);

    setTimeout(() => {
      setIsShaking(false);
      setIsPoured(true);
      setRandomCocktail(getRandomCocktail(cocktails));
    }, 1500);
  };

  return (
    <div className="shaker-container">
      <div
        className={`cocktail-shaker ${isShaking ? "shaking" : ""}`}
        onClick={handleClick}
      >
        <div className="shaker-top"></div>
        <div className="shaker-body"></div>
      </div>
      {isPoured && (
        <div className="pour">
          <CocktailCard cocktail={randomCocktail} />
        </div>
      )}
      {!isPoured && <p>Shake me!</p>}
    </div>
  );
}
