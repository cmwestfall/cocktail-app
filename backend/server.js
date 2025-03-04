const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

const cocktails = [
  {
    id: 1,
    name: "Margarita",
    ingredients: ["Tequila", "Lime Juice", "Triple Sec"],
  },
  {
    id: 2,
    name: "Old Fashioned",
    ingredients: ["Bourbon", "Bitters", "Sugar"],
  },
];

app.get("/", (req, res) => {
  res.send("Cocktail API is running!");
});

app.get("/api/cocktails", (req, res) => {
  res.json(cocktails);
});
