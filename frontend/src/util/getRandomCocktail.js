export const getRandomCocktail = (cocktailList) => {
  const randomIdx = Math.floor(Math.random() * cocktailList.length);
  return cocktailList[randomIdx];
};
