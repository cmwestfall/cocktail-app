import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { cocktails } from "./cocktails.js";

dotenv.config;

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

app.get("/", (req, res) => {
  res.send("Cocktail API is running!");
});

app.get("/api/cocktails", (req, res) => {
  res.json(cocktails);
});
