import types from './types';

export const trackResponse = (res) => ({
  type: types.TRACK_RESPONSE,
  res
});
