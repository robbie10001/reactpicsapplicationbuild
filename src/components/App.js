import React from "react";
import axios from "axios"; 
import SearchBar from "./SearchBar";


class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {query: term },
            headers: {
                Authorization: "Client-ID 0e547942e9e083d888beef77e66cd28148d3b25c674d49b1f67c4a81d63af71c"
            }
        });
        console.log(response.data.results);
    };

    
    
    render(){
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
    );
};
};



export default App