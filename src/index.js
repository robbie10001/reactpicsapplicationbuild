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

/* 
onClick, onChange and onSubmit METHOD
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

/* 
FETCHING DATA
1. Our application is going to be running within a users browser. 
2. Once they enter a term and press enter we are going to be making an ajax request (network request) over to the Unsplash API.
3, The Unsplash API will then send us back a big list of JSON records. Thie JSON will have information about pictures that match our searcb request.L0
4. We can then take that JSON to render a list of image on our screen. 
*/

/* 
MAKING A REQUEST FROM INSIDE A REACT APPLICATION
1. To make an AJAX request, we need to use a AJAX client we can do this using either (axios- a 3rd party package) or (fetch- a function built into modern browsers).
2. We are going to use Axios. In order to install axios we need to write the following command from the terminal
3. npm install --save axios 
4. see App.js to see how we get an API
*/

/*
HOW WE GET INFORMATION FROM OUR API TO RENDER
1. Component renders intself one time with no list of images
2. onSearchSubmit method called 
3. Request is made to unsplash
4. ...wait...
5. Request complete
6. Set image data on state of App component. 
7. App component rerenders and shows images.
*/

/*
CREATING MAP COMPONENTS FOR REACT 
1. const number = [0, 1, 2, 3, 4,];
2. let newNumbers = [];
3. for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i] * 10);
}
numbers;
newNumbers;
4. A map statement does exactly the same thing as we have done above.
5. It iterates through an array and returns a brand new array. 
6. It takes the original values and modifies them in some fashion. That's it. 
7. numer.map(num => num * 10)
numbers; 
8. number 3 and number 7 are the exact same thing! 

*/
