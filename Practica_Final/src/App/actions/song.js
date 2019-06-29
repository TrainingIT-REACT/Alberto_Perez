/*
import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getSongs = createAsyncAction('getSongs', async () => {
  const res = await fetch('/songs')
  return await res.json();
});

export const getSongsByAlbum = createAsyncAction('getSongsByAlbum', async (id) => {
  const res = await fetch(`/songs?album_id=${id}`)
  return await res.json();
});
*/
import types from './types';
import { trackSong } from './user';

const songsLoading = () => ({
  type: types.SONGS_LOADING
});

const songsError = () => ({
  type: types.SONGS_ERROR
});

const songsLoaded = (list) => ({
  type: types.SONGS_LOADED,
  list
})

export const getSongs = () => async (dispatch) => {
  dispatch(songsLoading());
  try {
    const res = await fetch('/api/songs');
    const json = await res.json();
    dispatch(songsLoaded(json));
  } catch {
    dispatch(songsError());
  }
};


const songsAlbumLoading = () => ({
  type: types.SONGS_ALBUM_LOADING
});

const songsAlbumError = () => ({
  type: types.SONGS_ALBUM_ERROR
});

const songsAlbumLoaded = (list) => ({
  type: types.SONGS_ALBUM_LOADED,
  list
})

export const getSongsByAlbum = (id) => async (dispatch) => {
  dispatch(songsAlbumLoading());
  try {
    const res = await fetch(`/api/songs?album_id=${id}`);
    const json = await res.json();
    dispatch(songsAlbumLoaded(json));
  } catch {
    dispatch(songsAlbumError());
  }
};



const songLoading = () => ({
  type: types.SONG_LOADING
});

const songError = () => ({
  type: types.SONG_ERROR
});

const songLoaded = (song) => ({
  type: types.SONG_LOADED,
  song
})

export const getSong = (id) => async (dispatch) => {
  dispatch(songLoading());
  try {
    const res = await fetch(`/api/songs/${id}`);
    const json = await res.json();
    console.log(json)
    dispatch(songLoaded(json));
    //track
    dispatch(trackSong(json));
  } catch {
    dispatch(songError());
  }
};