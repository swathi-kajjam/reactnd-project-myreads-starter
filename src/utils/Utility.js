/**
 * @description - Split and Capitalize first letter of every word in each Category
 * @param s - eg: currentlyReading
 * @returns {string} - eg: Currently Reading
 */
function capitalizeFirstLetter(s){
    return s.split(/(?=[A-Z])/).join(" ").replace(/^./, (char) => char.toUpperCase());
}

/**
 * @description - categorize the books
 * @param books
 * @returns {booksByCategory: Array} eg:[booksByCategory: [currentlyReading:[], read:[], wantToRead:[]]]
 */
function categorizeBooks(books){
    const booksByCategory = {};

     if (books && books.length > 0) {

         books.forEach(book => {

             const shelf = book.shelf;

             if(shelf !== 'none') {

                 /* if shelf category doesn't exist create category and add book */
                 if (!booksByCategory[shelf]) {
                     booksByCategory[shelf] = [];
                 }

                 booksByCategory[shelf].push(book);
             }
         })
     }

     return booksByCategory;
}

export {categorizeBooks, capitalizeFirstLetter};
