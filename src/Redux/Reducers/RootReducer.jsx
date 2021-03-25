import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import userReducer from './userReducer'
import itemReducer from './itemReducer'
import uiReducer from './uiReducer'
import { firestoreReducer } from 'redux-firestore'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    user : userReducer,
    item : itemReducer,
    ui : uiReducer,
    firestore: firestoreReducer
});

export default RootReducer;
