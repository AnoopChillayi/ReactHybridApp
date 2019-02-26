
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import registerReducer from './reducers/registerReducer'
import userListingReducer from './reducers/userListingReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    userListing: userListingReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;
