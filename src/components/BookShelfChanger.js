import React from 'react';

function BookShelfChanger(props){

    return(
        <div className="book-shelf-changer">
            <select>
                <option value="none" disabled>Move to...</option>
                {Object.keys(props.categories).map(category => (
                    <option key={category} value={props.categories[category]}>{category}</option>
                ))}
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookShelfChanger;