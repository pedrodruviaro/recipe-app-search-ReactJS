import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = "8c0252a8";
  const APP_KEY = "d5dcbdc9ab5bff0ebb2411c2f1d003c3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App" onSubmit={getSearch}>
      <h1 className="title">Recipe Search</h1>
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          required
          placeholder="Ex..'meat'"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed(2)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <footer className="footer">
        Powered by EDAMAN Search API 
      </footer>
    </div>
  );
}

export default App;
