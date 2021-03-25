import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../Reducers/RootReducer'
import firebase from '../Firebase/fbConfig'
import { getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore';


const initialState = {};
const middleWare = [thunk.withExtraArgument({getFirebase, getFirestore})];
const store = createStore(RootReducer, initialState,
    compose(applyMiddleware(...middleWare) ,reduxFirestore(firebase)
    )
);

export default store;
