import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, ingredients, image}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt={title} />
        </div>
    );
};

export default Recipe;