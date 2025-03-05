const ingredients = {
  absinthe: { name: "Absinthe" },
  apple_brandy: { name: "Apple Brandy" },
  champagne: { name: "Champagne" },
  cognac: { name: "Cognac" },
  cointreau: { name: "Cointreau" },
  dry_vermouth: { name: "Dry Vermouth" },
  gin: { name: "Gin" },
  lemon_juice: { name: "Lemon Juice" },
  lillet_blanc: { name: "Lillet Blanc" },
  maraschino_liqueur: { name: "Maraschino Liqueur" },
  orange_bitters: { name: "Orange Bitters" },
  peychaud_bitters: { name: "Peychaud's Bitters" },
  sugar_cube: { name: "Sugar Cube" },
  sweet_vermouth: { name: "Sweet Vermouth" },
};

export const cocktails = [
  {
    id: 1,
    name: "Corpse Reviver #1",
    ingredients: [
      ingredients.cognac,
      ingredients.apple_brandy,
      ingredients.sweet_vermouth,
    ],
    description: "",
    flavors: "",
    instructions: "",
  },
  {
    id: 2,
    name: "Corpse Reviver #2",
    ingredients: [
      ingredients.gin,
      ingredients.lemon_juice,
      ingredients.cointreau,
      ingredients.lillet_blanc,
      ingredients.absinthe,
    ],
  },
  {
    id: 3,
    name: "Death in the Afternoon",
    ingredients: [ingredients.absinthe, ingredients.champagne],
  },
  {
    id: 4,
    name: "Sazerac",
    ingredients: [
      ingredients.cognac,
      ingredients.absinthe,
      ingredients.sugar_cube,
      ingredients.peychaud_bitters,
    ],
  },
  {
    id: 5,
    name: "Tuxedo",
    ingredients: [
      ingredients.gin,
      ingredients.dry_vermouth,
      ingredients.maraschino_liqueur,
      ingredients.absinthe,
      ingredients.orange_bitters,
    ],
  },
];
