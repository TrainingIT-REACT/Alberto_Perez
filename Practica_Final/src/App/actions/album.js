/*
import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbums = createAsyncAction('getAlbums', async () => {
  const res = await fetch('/albums')
  return await res.json();
});

export const getAlbum = createAsyncAction('getAlbum', async (id) => {
  const res = await fetch(`/albums/${id}`)
  return await res.json();
});
*/
import types from './types';
import { trackAlbum } from './user';

const albumsLoading = () => ({
  type: types.ALBUMS_LOADING
});

const albumsError = () => ({
  type: types.ALBUMS_ERROR
});

const albumsLoaded = (list) => ({
  type: types.ALBUMS_LOADED,
  list
})

export const getAlbums = () => async (dispatch) => {
  dispatch(albumsLoading());
  try {
    const res = await fetch('/albums');
    const json = await res.json();
    dispatch(albumsLoaded(json));
  } catch {
    dispatch(albumsError());
  }
};


const albumLoading = () => ({
  type: types.ALBUM_LOADING
});

const albumError = () => ({
  type: types.ALBUM_ERROR
});

const albumLoaded = (album) => ({
  type: types.ALBUM_LOADED,
  album
})

export const getAlbum = (id) => async (dispatch) => {
  dispatch(albumLoading());
  try {
    const res = await fetch(`/albums/${id}`);
    const json = await res.json();
    //buscamos el total de las canciones
    const ress = await fetch(`/songs?album_id=${id}`);
    const jsons = await ress.json();
    let total = 0;
    for(let i=0; i<jsons.length; i++){
      total += jsons[i].seconds
    }
    json["total"] = total;
    
    dispatch(albumLoaded(json));
    //track
    dispatch(trackAlbum(json));
  } catch {
    dispatch(albumError());
  }
};
