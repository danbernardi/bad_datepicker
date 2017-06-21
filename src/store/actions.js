/**
 * Changes the active breakpoint
 *
 * @param {string} breakpointName          String defining the active breakpoint
 * @param {number} breakpointSize          Number defining the active breakpoint
 * @return {Object} Action object
 */
export function setActiveBreakpoint (breakpointName, breakpointSize) {
  return ({
    type: 'SET_ACTIVE_BREAKPOINT', breakpointName, breakpointSize
  });
}

/**
 * Tracks location change
 *
 * @param      {string}  location  The location string
 * @return     {Object}  Action object
 */
export function locationChange (location) {
  return ({
    type: 'LOCATION_CHANGE', location
  });
}

// Specialized actions below -- don't follow patterns
// When adding actions here, add them to the exceptions array in the actions spec.

export function updateLocation ({ dispatch }) {
  return function (nextLocation) {
    dispatch(locationChange(nextLocation));
  };
}
