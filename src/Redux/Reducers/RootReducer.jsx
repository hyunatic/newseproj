import { combineReducers } from 'redux';
import itemReducer from './itemReducer'
import { firestoreReducer } from 'redux-firestore'
import userReducer from './userReducer'

const RootReducer = combineReducers({
    item : itemReducer,
    firestore: firestoreReducer,
    user: userReducer
});

export default RootReducer;
