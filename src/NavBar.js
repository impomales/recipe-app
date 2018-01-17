import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

class NavBar extends Component {
    static defualtPropps = {
        onNewRecipe() {}
    }
    
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    
    render() {
        return (
            <header className="navbar">
                <div className="navbar-title">
                    <h1><a>Recipe App</a></h1>
                </div>
                <nav className="navbar-items">
                    <li><a onClick={this.props.onNewRecipe}>Add Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </nav>
            </header>
        );
    }
}

export default NavBar;