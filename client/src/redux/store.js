// Importing The Root Reducer
import rootReducer from './reducers/rootReducer';

// Configuring The Redux Store Here
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

// Configuring The Redux DevTool in Dev_Mode
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Extracting The Store Within The configured & routeReducer
export default createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));