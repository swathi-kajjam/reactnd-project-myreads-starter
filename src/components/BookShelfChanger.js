import React, { Component } from 'react';

class BookShelfChanger extends Component{

    onChangeHandler = (e) => {
        this.props.book !== e.target.value && this.props.updateBookShelf(this.props.book, e.target.value)
    }

    render()
    {
        let {category, categories} = this.props;

        return(
            <div className="book-shelf-changer">
                <select value={category} onChange={this.onChangeHandler}>
                    <option value="none" disabled>Move to...</option>
                    {Object.keys(categories).map(category => (
                        <option key={category} value={category}>{categories[category]}</option>
                    ))}
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}


export default BookShelfChanger;