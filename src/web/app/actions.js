import axios from 'axios';
/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export const getHeaderTabBegin = () => ({
  type: types.SET_HEADER_TAB_BEGIN,
});

export const getHeaderTabSuccess = (data) => ({
  type: types.SET_HEADER_TAB_SUCCESS,
  payload: { data },
});

export const getHeaderTabFailure = (error) => ({
  type: types.SET_HEADER_TAB_FAILURE,
  payload: { error },
});

export const setTitleActionCreator = (newTitle) => ({
  type: types.SET_TITLE,
  payload: newTitle,
});

export const getHeaderTabDataActionCreator = () => (dispatch) => {
  const apiURL = `http://localhost:${process.env.API_PORT}/api`;
  console.log('apiURL:', apiURL);
  console.log('running getHeaderTabBegin');
  dispatch(getHeaderTabBegin());
  return axios.get(apiURL)
    .then((res) => {
      console.log('running getHeaderTabSuccess');
      dispatch(getHeaderTabSuccess(res.data));
      return res.data;
    })
    .catch((error) => dispatch(getHeaderTabFailure(error)));
};
