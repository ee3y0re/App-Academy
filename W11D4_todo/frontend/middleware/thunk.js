export const myThunk = function(store) {
  return function(next) {
    return function(action) {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState); //if function
      } // else below
      return next(action);
    }
  }
}