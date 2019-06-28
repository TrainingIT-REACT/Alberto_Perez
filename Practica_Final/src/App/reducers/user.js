import types from '../actions/types';

// Estado inicial
const initialState = {
  name: "",
  album: [],
  song: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_NAME:
      return {
        ...state,
        album: [],
        song: [],
        name: action.name
      };
    case types.TRACK_ALBUM:
      return {
        ...state,
        album: [
          ...state.album, action.album
        ]
      };
    case types.TRACK_SONG:
      return {
        ...state,
        song: [
          ...state.song, action.song
        ]
      };
    default:
      return state;
  }
}

export default reducer;
