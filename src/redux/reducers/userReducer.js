import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ,
  SET_CURR_ROLE,
} from '../types';

const initialState = {
  authenticated: false,
  loading: false,
  currUser: {},
  notifications: [],
  currRole:'admin'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        loading: false,
        currUser:action.payload
      };
    case SET_CURR_ROLE:
      return {
        ...state,
        currRole:action.payload
      }
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state
      };
    default:
      return state;
  }
}
