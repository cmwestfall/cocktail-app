import { useState } from "react";
import { CocktailCard } from "./components/CocktailCard";
import { useCocktails } from "./hooks/useCocktails";
import { getRandomCocktail } from "./util/getRandomCocktail";
import { Header } from "./components/Header";
import { CocktailLibrary } from "./components/CocktailLibrary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import MyShelf from "./pages/MyShelf";
import Recommendations from "./pages/Recs";
import Randomizer from "./pages/Randomizer";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/my-shelf" element={<MyShelf />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/randomizer" element={<Randomizer />} />
        </Routes>
      </Router>
    </div>
  );
}
