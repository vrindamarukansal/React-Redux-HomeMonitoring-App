import {
    LOADING_DATA,
  SET_ALERTS,
    //LOADING_UI,
    SET_SENSORS,
    SET_ALERT_ASIGNEE,
    SUBMIT_ALERT_COMMENT,
    SET_ALERT_STATUS,

  } from '../types';
import getSensorData from "../../data/sensor-data";
import getAlertData from "../../data/alert-data"

//get all sensor info
export const getSensorItems = ()=>(dispatch)=> {
  dispatch({ type: LOADING_DATA });
  dispatch(
  {
      type: SET_SENSORS,
      payload: getSensorData()
  })
}

export const getAlertItems = (role)=>(dispatch)=> {
  dispatch({ type: LOADING_DATA });
  dispatch(
  {
      type: SET_ALERTS,
      payload: getAlertData(role)
  })
}

export const changeAlertAsignee = (alertId, newAsignee) => (dispatch) => {
  //axios get will update comment in database
      dispatch({
        type: SET_ALERT_ASIGNEE,
        payload: {alertId,newAsignee}
      })
      .then();
};
export const addComment = (alertId, newComment) => (dispatch) => {
  //axios get will update comment in database
      dispatch({
        type: SUBMIT_ALERT_COMMENT,
        payload: {alertId,newComment}
      })
      .then();
};
  
  