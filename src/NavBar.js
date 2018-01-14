import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-title">
                    <h1>Recipe App</h1>
                </div>
                <div className="navbar-items">
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