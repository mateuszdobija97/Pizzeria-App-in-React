import React from 'react';
import './Header.css'

const Header = props => {

    let selected = props.selected.map(ingredient => ingredient.name);
    selected = ['sos', 'ser', ...selected].join(', '); // return table of selected ingredients

    let total = 10;
    (props.ingredients.filter(ingredient => ingredient.active)).map(ingredient => total += ingredient.price); // sums up the order

    return (
        <header>
            <h1>TWOJA PIZZA:</h1>
            <h2>{selected}</h2>
            <h2>Do zapłaty: {total.toFixed(2)} ZŁ</h2>
        </header>
    );
}

export default Header;