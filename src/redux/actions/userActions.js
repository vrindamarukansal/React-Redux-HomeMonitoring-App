import {
  SET_USER,
  SET_CURR_ROLE,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
} from '../types';
import axios from 'axios';
import getUserData from "../../data/user-data"


export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/image', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user', userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const getCurrentUser = (role) => (dispatch) => {
  dispatch({ type: LOADING_USER });
      const userData= getUserData(role)
      dispatch({
        type: SET_USER,
        payload: userData
      });

};

export const setCurrentRole = (role) => (dispatch) => {
  dispatch({
    type:SET_CURR_ROLE,
    payload: role
  });
}

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
//  setAuthorizationHeader(res.data.token);
  dispatch(getUserData());
  dispatch({ type: CLEAR_ERRORS });
  history.push('/');

};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};
/*
const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};*/
