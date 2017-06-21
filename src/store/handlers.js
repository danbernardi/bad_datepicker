/**
 * Object defining current breakpoint state
 * @type {Object}
 */
export const breakpoint = {
  _init: { name: 'default', size: null, queryState: [] },
  SET_ACTIVE_BREAKPOINT: (state, action) => {
    const newobj = {
      name: action.breakpointName,
      size: action.breakpointSize
    };

    return newobj;
  }
};
