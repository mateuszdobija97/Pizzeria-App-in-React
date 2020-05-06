import React, { Component } from 'react'
import Header from './Header'
import IngredientsList from './IngredientsList'

class App extends Component {
  state = {
    selectedIngredients: [],
    ingredients: [
      { id: 1, name: 'szynka', price: 6, active: false },
      { id: 2, name: 'kurczak', price: 6, active: false },
      { id: 3, name: 'salami', price: 6, active: false },
      { id: 4, name: 'boczek', price: 6, active: false },
      { id: 5, name: 'pieczarki', price: 5, active: false },
      { id: 6, name: 'cebula', price: 5, active: false },
      { id: 7, name: 'oscypek', price: 5.50, active: false },
      { id: 8, name: 'papryka', price: 5, active: false },
      { id: 9, name: 'oliwki', price: 5.50, active: false },
      { id: 10, name: 'krewetki', price: 7, active: false },
      { id: 11, name: 'małże', price: 7, active: false },
      { id: 12, name: 'ser feta', price: 5, active: false },
      { id: 13, name: 'tuńczyk', price: 7, active: false },
      { id: 14, name: 'wołowina', price: 6, active: false },
      { id: 15, name: 'kukurydza', price: 5, active: false },
    ]
  }

  handleIngredientClick = (id) => {
    let ingredients = [...this.state.ingredients]
    ingredients = this.state.ingredients.map(ingredient => { // thanks to id, can change status ingredient
      if (id === ingredient.id) {
        ingredient.active = !ingredient.active;
      }
      return ingredient;
    })

    let selectedIngredients = this.state.selectedIngredients;
    selectedIngredients = ingredients.filter(ingredient => ingredient.active === true) // return object, where active is only true

    this.setState({
      ingredients,
      selectedIngredients,
    })

  }


  render() {
    return (
      <div className="app" >
        <Header ingredients={this.state.ingredients} selected={this.state.selectedIngredients} />
        <IngredientsList ingredients={this.state.ingredients} click={this.handleIngredientClick} />
      </div>
    );
  }
}

export default App;