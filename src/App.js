import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('honey');

  const APP_ID = "67ceb61c";
  const APP_KEY = "a1a91d97f99883774573d99ccd50a2bb";
  const exampleREQ = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
  useEffect(
    () => {
      getRecipes();
    }
  , [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleREQ);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  };

  const updateSearch = e => {
    setSearch(e.target.value);  
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.uri}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
};

export default App;