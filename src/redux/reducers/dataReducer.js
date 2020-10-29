import moment from 'moment';
import {
    LOADING_DATA,
    SET_SENSORS,
    SET_ALERTS,
    SET_ALERT_ASIGNEE,
    SET_ALERT_STATUS,
    SUBMIT_ALERT_COMMENT,
    SET_STAFF

  } from '../types';
  const initialState = {
    loading:false,
    sensors:[],
    alerts:[],
    staff:[]
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
      case SET_STAFF:
        return{
          ...state,
          staff:action.payload,
          loading:false
        }
      case SET_ALERT_ASIGNEE:
        state.alerts.forEach(alert => {
          if(alert.id === action.payload.alertId){
            alert.assigned = action.payload.newAsignee
          }
        });
        return {
          ...state,
        };
        case SET_ALERT_STATUS:
          state.alerts.forEach(alert => {
            if(alert.id === action.payload.alertId){
              alert.status = action.payload.newStatus
              alert.resolve_date= moment().format('ll')
              alert.resolve_time= moment().format('LT')
            }
          });
          return {
            ...state,
          };
      default:
        return state;
    }
  }