// Definimos la lista de acciones
const actions = [
  // Usuarios
  "UPDATE_NAME",
  "TRACK_ALBUM",
  "TRACK_SONG",

  // Server response
  "TRACK_RESPONSE",

  // Songs
  "SONGS_LOADING",
  "SONGS_LOADED",
  "SONGS_ERROR",
  "SONGS_ALBUM_LOADING",
  "SONGS_ALBUM_LOADED",
  "SONGS_ALBUM_ERROR",
  "SONG_LOADING",
  "SONG_LOADED",
  "SONG_ERROR",
  "SONGS_SEARCH_LOADING",
  "SONGS_SEARCH_LOADED",
  "SONGS_SEARCH_ERROR",

  // Album
  "ALBUMS_LOADING",
  "ALBUMS_LOADED",
  "ALBUMS_ERROR",
  "ALBUM_LOADING",
  "ALBUM_LOADED",
  "ALBUM_ERROR",
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
