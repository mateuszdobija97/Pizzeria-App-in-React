import React from 'react';
import './IngredientsList.css'
import Ingredient from './Ingredient'

const IngredientsList = props => {
    const ingredientsList = props.ingredients.map(ingredient => (
        <Ingredient // return each ingredient in a separate component
            key={ingredient.id}
            ingredient={ingredient}
            click={props.click}
        />
    ));

    return (
        <ul>
            {ingredientsList}
        </ul>
    );
}

export default IngredientsList;