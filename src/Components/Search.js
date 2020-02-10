import React, { Component } from "react";
import $ from "jquery";
import { API, SEARCH_TITILE, INCLUDE_ALL_META_DATA } from "../Constants.js";
import SearchResults from "../Components/SearchResults.js";
class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchResults: []
        }

        this.prepareSearch = this.prepareSearch.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="input-group input-group-xl">
                    <input type="text" className="form-control" id="searchBar" />
                    <div className="btn bg-primary text-white" id="searchButton" onClick={this.prepareSearch}>Search</div>
                </div>
                <br></br>
                <div className="container">
                    <SearchResults items={this.state.searchResults}/>
                </div>
            </div>
        );

    }

    prepareSearch() {
        var searchValue = $("#searchBar").val();

        if (searchValue === "" || searchValue === " ") {
            alert("Please enter something!")
            return;
        }
        var titleQuery = $("#searchBar").val().replace(/ /g, "%20");
        console.log(titleQuery);
        this.performSearch(titleQuery);
    }

    performSearch(query) {
        $.ajax({
            type: "GET",
            url: API + SEARCH_TITILE + query + INCLUDE_ALL_META_DATA,
            async: false,
            dataType: 'json',
            success: function (data) {
                console.log(data.texts);
                this.setState({ searchResults: data.texts }, () => {
                    console.log(this.state.searchResults);;
                  }); 
                console.log(this.state.searchResults);
            }.bind(this),
            error: function () {
            }
    
        });
    }

}



export default Search;