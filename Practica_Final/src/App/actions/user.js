import types from './types';

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});

export const trackAlbum = (album) => ({
  type: types.TRACK_ALBUM,
  album
});

export const trackSong = (song) => ({
  type: types.TRACK_SONG,
  song
});
