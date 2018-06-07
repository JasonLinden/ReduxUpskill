import { combineReducers } from 'redux';

import BooksReducer from "./reducer_books";
import ActiveBookReducer from "./reducer_active_book";

// <-- This key is not a key on the global state. which we access from props
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer 
});

export default rootReducer;
