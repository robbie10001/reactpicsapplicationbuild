import React from "react"; 

class SearchBar extends React.Component {
    
//In this example, our method will be called whenever a user types into our searchbar.
    onInputChange(event) {
        event.target.value

    };


    render () {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" onChange={this.onInputChange} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;