import React from "react"; 

class SearchBar extends React.Component {  
//In this example, our method will be called whenever a user types into our searchbar.
    
/* Controller vs Uncontroller elements 
1. Flow for the below code. 
2. User Types in input
3. Callback gets invokes
4. We call setState with the new value
5. Component rerenders
6. Input is told what its value is (coming from state)


Controlled elements 
1. Once we refactored it was stored in the React world. 
2. This is far better than our information being stored in an uncontrolled way!

Uncontrolled elements 
1. Before we refactored our element below it was stored within our html component

*/


state = { term: "Let's get searching!" };

//4. After the user has entered some input, the render method runs again for a second time.
//5. This will then overwrite whatever is within our this.state.term! 
//6. All of these changes make this into a controlled element! 
    render () {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    //
                    value ={this.state.term} 
                    //1. As soon as the user types input the onChange function is called.
                    //2. We take the event object (e) we take the change (e.target.value) and update the state on our component with the new value.
                    //3. Threefore this.state.term is going to contain whatever value the user has passed in as input  
                    onChange={e => this.setState({ term: e.target.value})} 
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;