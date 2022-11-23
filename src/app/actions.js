import * as types from '../constants/actionTypes';

export const setTitleActionCreator = (newTitle) => ({
  type: types.SET_TITLE,
  payload: newTitle,
});
