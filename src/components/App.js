import React from "react";
import SearchBar from "./SearchBar";
import axious from "axios";

class App extends React.Component{
    onSearchSubmit(term){
        axious.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:{
                Authorization: 'Client-ID d063a61b0eeb51270504189575dcf743458172b16a8f37d6658dc14e733d6fa8'
            }
        })

    };

    render() {

        return(
            <div className={"ui container"} style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }


}


export default App;


//todo semntic-uı add