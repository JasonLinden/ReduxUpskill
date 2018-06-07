import React, { Component } from 'react';
import { bindActionCreators } from "redux"; // <--makes sure all reducers know about the action

import { connect } from 'react-redux';

import { selectBook } from "../actions/index";

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (<ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
        )
    }
}

// The glue between react and redux
function mapStateToProps(state) { // <-- state has the array of books and selected book
    // Whatever is returned will show up as/become props inside of BookList

    return {
        books: state.books
    };
}

// Anything returned from this function will 
// return as props on this BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers by using bindActionCreators() functions
    return bindActionCreators({ selectBook: selectBook }, dispatch);
    // selectBook will now be available on this.props
}

// Promote BooList from a component to a container - it needs to know
// about this new dispatch method, selectBook (action). Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);