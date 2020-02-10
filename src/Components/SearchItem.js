import React, { Component } from "react";
import ReactDOM from 'react-dom';
import BookDisplay from "../Components/BookDisplay.js";
class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.index = props.index;
    }

    render() {
        const { item } = this.props;
        console.log(item);
        return (
            <li className="list-group-item border border-dark" id="item" onClick={this.getItem.bind(this)}>
                <h3>{item.title} {"By"} {item.author}</h3>
                <h5>Language: {item.language}</h5>
                <h5>Subjects: {item.subject}</h5>
            </li>
        );


    }

    getItem() {
        console.log(this.index);
        const {items} = this.props; 
        ReactDOM.render((<BookDisplay item={items[this.index]}/>), document.getElementById('root'));
    }
}

export default SearchItem;