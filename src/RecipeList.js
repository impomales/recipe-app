import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: []
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    
    render() {
        const recipes = this.props.recipes.map((recipe, index) => (
            <Recipe
                key={index}
                title={recipe.title}
                img={recipe.img}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
            />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;