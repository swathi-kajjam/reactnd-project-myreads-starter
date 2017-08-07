

function capitalizeFirstLetter(s){
    return s.split(/(?=[A-Z])/).join(" ").replace(/^./, (char) => char.toUpperCase());
}

/**
 * categorizeBooks : categorize the books
 * @param books
 * @returns {{booksByCategory: Array, listOfAllCategories: Array}}
 */
function categorizeBooks(books){
    let booksByCategory = [];

     if(books && books.length > 0) {

         books.forEach(book => {

             let shelf = book.shelf;

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
