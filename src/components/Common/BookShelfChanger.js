import React, { Component } from 'react';

/**
 * BookShelfChanger - Represents the book shelf changer Component
 */
class BookShelfChanger extends Component{

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