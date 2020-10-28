export default function(role) {
  switch(role){
    case 'user':
        return [
          {
            title: "Activity Monitor",
            to: "/dashboard/user",
            subtitle:false,
            htmlBefore: '<i class="material-icons">person_pin_circle</i>',
            htmlAfter: ""
          },
          {
            title: "Alert Logs",
            to: "/alert-logs",
            subtitle:false,
            htmlBefore: '<i class="material-icons">error</i>',
            htmlAfter: ""
          },
          {
            title: "Care Circle",
            to: "/care-circle",
            subtitle:false,
            htmlBefore: '<i class="material-icons">list_alt</i>',
            htmlAfter: ''
          },
          {
            title: "Manage Account",
            subtitle:true,
            className: 'main-sidebar__nav-title border-top border-bottom px-4 py-1',
            htmlAfter: ""
          },
          {
            title: "Account Settings",
            htmlBefore: '<i class="material-icons">&#xE8B8;</i>',
            to: "/account-settings",
            subtitle:false,
          },
          {
            title: "Logout",
            htmlBefore: '<i class="material-icons text-danger">&#xE879;</i>',
            to: "/logout",
            className: "text-danger",
            subtitle:false,
          }
        ];
    case 'admin':
      return [
        {
          title: "Alert Logs",
          to: "/alert-logs",
          subtitle:false,
          htmlBefore: '<i class="material-icons">error</i>',
          htmlAfter: ""
        },
        {
          title: "Clients",
          to: "/client-list",
          subtitle:false,
          htmlBefore: '<i class="material-icons">home</i>',
          htmlAfter: ''
        },
        {
          title: "Staff",
          to: "/staff-management",
          subtitle:false,
          htmlBefore: '<i class="material-icons">group</i>',
          htmlAfter: ''
        },
        {
          title: "Manage Account",
          subtitle:true,
          className: 'main-sidebar__nav-title border-top border-bottom px-4 py-1',
          htmlAfter: ""
        },
        {
          title: "Account Settings",
          htmlBefore: '<i class="material-icons">&#xE8B8;</i>',
          to: "/account-settings",
          subtitle:false,
        },
        {
          title: "Logout",
          htmlBefore: '<i class="material-icons text-danger">&#xE879;</i>',
          to: "/logout",
          className: "text-danger",
          subtitle:false,
        }
      ]

    default:
      return [
          {
            title: "Login",
            htmlBefore: '<i class="material-icons text-danger">&#xE879;</i>',
            to: "/login",
            className: "text-danger",
            subtitle:false,
          }
      ]
      }
}
