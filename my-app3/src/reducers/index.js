import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_books'
//As you might have noticed that 'BooksReducer' and 'books' are the terms that are nowhere present in the file'reducer_books'
// but then how come we are putting the nam here? 
// So on the 2nd line we imported 'BooksReducer' from './reducer_books.js' and this is where we gave it the name 'BooksReducer'
// Now we are using 'books' as variable to define that array that we named as 'BooksReducer'.

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
    
});

export default rootReducer;