import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * BookShelfChanger - Represents the book shelf changer Component
 */
class BookShelfChanger extends Component{

    static propTypes = {
        book: PropTypes.object.isRequired,
        category: PropTypes.string,
        updateBookShelf: PropTypes.func.isRequired
    }

    /**
     * @description - Event handler which gets fired when category is changed
     * @param e
     */
    onChangeHandler = (e) => {
        this.props.book !== e.target.value && this.props.updateBookShelf(this.props.book, e.target.value)
    }

    render()
    {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.category} onChange={this.onChangeHandler}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;