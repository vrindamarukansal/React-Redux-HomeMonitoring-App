import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_SIDEBAR,
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
} from '../types';

const initialState = {
  loading: false,
  errors: null,
  menuVisible: false,
  navItems:[],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        menuVisible: false
      };
    case OPEN_SIDEBAR:
      return {
        ...state,
        menuVisible: true
      };
    case SET_SIDEBAR:
      return {
        ...state,
        navItems: action.payload,
        menuVisible: false
      }
    default:
      return state;
  }
}