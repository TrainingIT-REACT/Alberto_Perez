import types from '../actions/types';

// Estado inicial
const initialState = {
  res: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.TRACK_RESPONSE:
        return {
          ...state,
          res: [
            ...state.res, action.res
          ]
        };
    default:
      return state;
  }
}

export default reducer;
