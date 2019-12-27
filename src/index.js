import React from "react";
import ReactDOM from "react-dom"; 
import App from "./components/App";

ReactDOM.render(<App />, 
    document.querySelector("#root")
    )



/*
APPLICATION BUILD AND CHLLANGES 
1. How do we get feedback from the user? USER EVENTS! How do we deal with user events?
2. How do we fetch data from some outside API or server? How to we pull data from a database?
3. How do we show lists of records? 
/*

/*
OUR BUILD
1. We are going to split our application into two implimentations. 
2. Version 1- Firstly, we are going to back a simple and straight forward app. 
3. We want to show a text input at the top which a user can use. After this, we are going to do a research or search to an external API. 
4. Version 2- We are going to do the same stuff as in version 1. 
5. The difference will be how we show this to the user. We want to tile images across the screen. We want to figure out how to make different size images end up fitting well within our application.
*/

/* 
WHAT COMPONENTS WILL OUR APPLICATION NEED?
1. We need a search bar component.
2. We will also need an image list to render images to our screen. 
3. We will also have an app component which will be the most root component of our application. 
*/

/* onClick, onChange and onSubmit METHOD
1. user clicks on something----> onClick
2. user changes text in an input----->onChange
3. user sumbits s form----->onSubmit 
*/

/*
Uncontrolled Versus Controller Objects 
1. See SearchBar.js 
*/

/* Understanding .this in JavaScript
1. The .this keyword is used within a class to reference the class itself. 
2. We can then use .this to access properties within our class. 
3. The value of this in a function is determined by 

*/

