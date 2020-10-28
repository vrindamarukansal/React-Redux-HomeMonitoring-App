import {
    SET_SIDEBAR,
    CLOSE_SIDEBAR,
    OPEN_SIDEBAR,
  //  LOADING_DATA,
  //  LOADING_UI,
  } from '../types';

import getSidebarNavItems from "../../data/sidebar-nav-items";

//change menu state and return
export const closeSidebar=()=>(dispatch)=>{

    dispatch({type:CLOSE_SIDEBAR})
};

export const openSidebar=()=>(dispatch)=>{

    dispatch({type:OPEN_SIDEBAR})
};

//return sidebar items
export const getSidebarItems=(role)=>(dispatch)=>{
    dispatch(
        {
            type: SET_SIDEBAR,
            payload: getSidebarNavItems(role)
        })

}
