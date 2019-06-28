import types from '../actions/types';
//import { getSongs, getSongsByAlbum } from '../actions/song';

// Estado inicial
const initialState = {
  isLoading: false,
  list: [],
  song: null,
  error: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SONGS_LOADING:
      // Activamos la flag de isLoading.
      // Eliminamos cualquier error anterior
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case types.SONGS_LOADED:
      // Almacenamos los articulos y reiniciamos
      // las flags
      return {
        ...state,
        isLoading: false,
        list: action.list,
        error: false
      }
    case types.SONGS_ERROR:
      // Desactivamos la flag de carga y
      // activamos la de error
      return {
        ...state,
        isLoading: false,
        error: true
      }
    
    case types.SONGS_ALBUM_LOADING:
        // Activamos la flag de isLoading.
        // Eliminamos cualquier error anterior
        return {
          ...state,
          isLoading: true,
          error: false
        };
      case types.SONGS_ALBUM_LOADED:
        // Almacenamos los articulos y reiniciamos
        // las flags
        return {
          ...state,
          isLoading: false,
          list: action.list,
          error: false
        }
      case types.SONGS_ALBUM_ERROR:
        // Desactivamos la flag de carga y
        // activamos la de error
        return {
          ...state,
          isLoading: false,
          error: true
        }

      case types.SONG_LOADING:
          // Activamos la flag de isLoading.
          // Eliminamos cualquier error anterior
          return {
            ...state,
            isLoading: true,
            error: false
          };
      case types.SONG_LOADED:
          // Almacenamos los articulos y reiniciamos
          // las flags
          return {
            ...state,
            isLoading: false,
            song: action.song,
            error: false
          }
      case types.SONG_ERROR:
          // Desactivamos la flag de carga y
          // activamos la de error
          return {
            ...state,
            isLoading: false,
            error: true
          }

    default:
      return state;
  }
}

export default reducer;
