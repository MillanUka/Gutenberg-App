import React, { Component } from "react";
import SearchItem from "../Components/SearchItem.js";
class SearchResults extends Component {


    render() {
        const { items } = this.props;
        console.log(items);
        if(items == null) {
            return (<div>No results</div>);
        }

        
        return (
            <div className="container rounded" id="listContainer">
                <div className="container border border-dark">
                    <h1> Results </h1>
                    <ul className="list-group border border dark rounded" id="list">
                        {items.map((item, key) =>
                            <SearchItem key={key} item={item}/>)}
                    </ul>
                    <br></br>
                </div>
            </div>
        );

    }
}

export default SearchResults;