import React, { Component } from "react";

class SearchItem extends Component {


    render() {

        const {item} = this.props;
        console.log(item);
        return (
            <li className="list-group-item border border-dark" id="item">
                <h3>{item.title} {"By"} {item.author}</h3>
                <h5>Language: {item.language}</h5>
                <h5>Subjects: {item.subject}</h5>
            </li>
        );

    }
}

export default SearchItem;