import { constructReducers, curryMakeRootReducer, curryInjectReducer } from './boilerplate';
import * as handlers from './handlers';
import RM from 'redux-request-manager';

// EXPORTS

/**
 * Dictionary of reducer functions, with each key the function name, and each
 * value the associated function.
 */
export const reducers = constructReducers({ ...handlers }, {
  rm: RM.actionTrackerReducer(['LOCATION_CHANGE'])
});

/**
 * Drop-in replacement for the starter makeRootReducer function, but using handlers
 */
export const makeRootReducer = curryMakeRootReducer(reducers);

/**
 * Drop-in replacement for the starter injectReducer function, but using handlers
 */
export const injectReducer = curryInjectReducer(makeRootReducer);

export default makeRootReducer;
