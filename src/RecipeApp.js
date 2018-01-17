import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import NavBar from './NavBar';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          img: "french_toast.jpg",
          title: "French Toast",
          ingredients: [
            '6 thick slices of bread',
            '2 eggs',
            '2/3 cup of milk',
            '1/4 tsp of ground cinnamon',
            '1/4 tsp of nutmeg',
            '1 tsp of vanilla extract',
            'pinch of salt'
          ],
          instructions: "Beat together egg, milk, salt, spices and vanilla. Heat a lightly oiled griddle or skillet over medium-high heat. Dunk each slice of bread in egg mixture, soaking both sides. Place in pan, and cook on both sides until golden. Serve hot."
        },
        {
          id: 1,
          img: "mignon.jpg",
          title: "Filet Mignon with Rich Balsamic Glaze",
          ingredients: [
            '2 filet mignon steaks',
            '1/2 tsp of freshly ground black pepper',
            'salt to taste',
            '1/4 cup of balsamic vinegar',
            '1/4 cup of dry red wine',
          ],
          instructions: "Sprinkle freshly ground pepper over both sides of each steak, and sprinkle with salt to taste. Heat a nonstick skillet over medium-high heat. Place steaks in hot pan, and cook for 1 minute on each side, or until browned. Reduce heat to medium-low, and add balsamic vinegar and red wine. Cover, and cook for 4 minutes on each side, basting with sauce when you turn the meat over. Remove steaks to two warmed plates, spoon one tablespoon of glaze over each, and serve immediately."
        },
        {
          id: 2, 
          img: "cookie.jpg",
          title: "Best Chocolate Chip Cookie Ever!",
          ingredients: [
            '2 cups of all purpose flour',
            '1/2 tsp of baking soda',
            '1/2 tsp of salt',
            '3/4 cup of unsalted butter, melted',
            '1 cup of brown sugar',
            '1/2 cup of white sugar',
            '1 tbsp of vanilla extract',
            '1 egg',
            '1 egg yolk',
            '2 cups of semisweet chocolate chips'
          ],
          instructions: "Preheat the oven to 325 degrees F (165 degrees C). Grease cookie sheets or line with parchment paper. Sift together the flour, baking soda and salt; set aside. In a medium bowl, cream together the melted butter, brown sugar and white sugar until well blended. Beat in the vanilla, egg, and egg yolk until light and creamy. Mix in the sifted ingredients until just blended. Stir in the chocolate chips by hand using a wooden spoon. Drop cookie dough 1/4 cup at a time onto the prepared cookie sheets. Cookies should be about 3 inches apart. Bake for 15 to 17 minutes in the preheated oven, or until the edges are lightly toasted. Cool on baking sheets for a few minutes before transferring to wire racks to cool completely."
        }
      ],
      nextRecipeId: 3
    };
    
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: prevState.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...prevState.recipes, newRecipe]
      };
    });
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeInput onSave={this.handleSave}/>
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
