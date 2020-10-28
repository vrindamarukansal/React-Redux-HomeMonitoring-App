import {
    LOADING_DATA,
    SET_SENSORS,
    SET_ALERTS,
    SET_ALERT_ASIGNEE,
    SET_ALERT_STATUS,
    SUBMIT_ALERT_COMMENT

  } from '../types';
  const initialState = {
    loading:false,
    sensors:[],
    alerts:[]
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
      return {
        ...state,
        loading: true
      };

      case SET_SENSORS:
        return{
          ...state,
          sensors: action.payload,
          loading:false
        }

      case SET_ALERTS:
        return{
          ...state,
          alerts: action.payload,
          loading:false
        }
      case SET_ALERT_ASIGNEE:
        return {
          ...state,
          alert: {
            ...state.alert,
            assigned: action.payload
          }
        };
        case SET_ALERT_STATUS:
          return {
            ...state,
            alert: {
              ...state.alert,
              status: action.payload
            }
          };
      default:
        return state;
    }
  }