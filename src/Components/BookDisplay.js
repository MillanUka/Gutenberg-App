import React, { Component } from "react";
import $ from "jquery";
import { API } from "../Constants.js";

class BookDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {item} = this.props;
        console.log(item);
        var book = getItemText(item.text_id).responseJSON;
        console.log(book);

        return (
            <div className="container bg-white">
                 {book.body}
            </div>
        );

    }

    
}

function getItemText(id) {
    console.log(API + "texts/" + id + "/body");
    return $.ajax({
        type: "GET",
        url: API + "texts/" + id + "/body",
        async: false,
        dataType: 'json',
        success: function (data) {
            console.log(data);

            return data;

        },
        error: function () {
        }

    });
}
export default BookDisplay;