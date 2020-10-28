import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//redux
import routes from "./routes";
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getCurrentUser } from './redux/actions/userActions';

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/portalcss.min.css";
import "./styles/fhcs.css";

import axios from 'axios'

axios.defaults.baseURL = 'localhost:3000/'


    store.dispatch({ type: SET_AUTHENTICATED });
    store.dispatch(getCurrentUser());


export default () => (
  <Provider store={store}>
  <Router>
    <div>
      <Switch>
      {routes.map((route,index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={(props =>{
              return(
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />  
        );
      })}
      </Switch>
    </div>
  </Router>
  </Provider>
);
