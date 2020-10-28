import { DefaultLayout, UnauthLayout } from "./layouts"

// Route Views
import ActivityMonitor from "./views/ActivityMonitor"
import AccountSettings from "./views/AccountSettings"
import Errors from "./views/Errors"
import Logout from "./views/Logout"
import Login from "./views/Login"

//admin imports
import Clients from "./views/Clients"
import CareCircle from "./views/CareCircle"
import AlertLogging from "./views/AlertLogging"
import StaffList from './views/StaffList'

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: ActivityMonitor
  },
  {
    path: "/activity-monitor",
    exact: true,
    layout: DefaultLayout,
    component: ActivityMonitor
  },
  {
    path: "/dashboard/user",
    exact: true,
    layout: DefaultLayout,
    component: ActivityMonitor
  },
  {
    path: "/account-settings",
    exact: true,
    layout: DefaultLayout,
    component: AccountSettings
  },
  {
    path: "/logout",
    layout: UnauthLayout,
    component: Logout
  },
  {
    path: "/login",
    layout: UnauthLayout,
    component: Login
  },
  //admin routes
  {
    path: "/dashboard/admin",
    exact: true,
    layout: DefaultLayout,
    component: AlertLogging
  },
  {
    path: "/alert-logs",
    exact: true,
    layout: DefaultLayout,
    component: AlertLogging
  },
  {
    path: "/client-list",
    exact: true,
    layout: DefaultLayout,
    component: Clients
  },
  {
    path: "/staff-management",
    exact: true,
    layout: DefaultLayout,
    component: StaffList
  },
  {
    path: "/care-circle",
    exact: true,
    layout: DefaultLayout,
    component: CareCircle
  },
  {
    path: "*",
    layout: UnauthLayout,
    component: Errors
  },
]
