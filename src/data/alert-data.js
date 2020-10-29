export default function(role) {
    switch(role){
      case 'user':
          return [
              {
                  "id":'1',
                  "name":"John Doe",
                  "sensor":"fridge",
                  "created_date":"24 mar, 2020",
                  "created_time":"12:00PM",
                  "resolve_date":null,
                  "resolve_time":null,
                  "assigned":"Ali Kerry",
                  "status":true,
              },
              {
                "id":'4',
                "name":"John Doe",
                "sensor":"Front Door",
                "created_date":"24 mar, 2020",
                "created_time":"12:00PM",
                "resolve_date":"24 mar, 2020",
                "resolve_time":"12:40PM",
                "assigned":"Clark Angela",
                "status":false,
            },
            {
                "id":'5',
                "name":"John Doe",
                "sensor":"bathroom",
                "created_date":"24 mar, 2020",
                "created_time":"12:00PM",
                "resolve_date":"24 mar, 2020",
                "resolve_time":"12:40PM",
                "assigned":"Ali Kerry",
                "status":false,
            },

          ];
        case 'admin':
            return [
                {
                    "id":'1',
                    "name":"John Doe",
                    "sensor":"fridge",
                    "created_date":"24 mar, 2020",
                    "created_time":"12:00PM",
                    "resolve_date":null,
                    "resolve_time":null,
                    "assigned":"Ali Kerry",
                    "status":true,
                },
                {
                  "id":'2',
                  "name":"Alexander",
                  "sensor":"Front Door",
                  "created_date":"24 mar, 2020",
                  "created_time":"12:00PM",
                  "resolve_date":"24 mar, 2020",
                  "resolve_time":"12:40PM",
                  "assigned":"Jerry Natahn",
                  "status":false,
              },
              {
                  "id":'3',
                  "name":"Angela Ross",
                  "sensor":"bathroom",
                  "created_date":"24 mar, 2020",
                  "created_time":"12:00PM",
                  "resolve_date":"24 mar, 2020",
                  "resolve_time":"12:40PM",
                  "assigned":"Ali Kerry",
                  "status":false,
              },
            ]
    }
}