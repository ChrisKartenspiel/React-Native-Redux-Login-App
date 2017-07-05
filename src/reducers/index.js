// Index for all Reducers 

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';


export default combineReducers({
    libraries: LibraryReducer
});
