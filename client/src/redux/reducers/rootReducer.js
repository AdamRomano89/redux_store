import { combineReducers } from 'redux';

// Dummy Reducer Will be Removed (Configuration purpose);
const dummyReducer = (state = "Hello World", action) => {
    return state;
};

// Exporting The RootReducer
export default combineReducers({
    dummyReducer
});