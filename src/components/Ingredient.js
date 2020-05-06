import React from 'react';
import './Ingredient.css'

const Ingredient = props => {

    return (
        <li onClick={() => props.click(props.ingredient.id)} className={props.ingredient.active ? 'active' : null}  >
            <p>{props.ingredient.name}</p>
            <p>{`${props.ingredient.price.toFixed(2)} ZŁ`}</p>
        </li>
    );
}

export default Ingredient;