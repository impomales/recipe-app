import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe App</h1>
                </div>
                <div>
                    <ul>Add Recipe</ul>
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Contact</ul>
                </div>
            </div>
        );
    }
}

export default NavBar;