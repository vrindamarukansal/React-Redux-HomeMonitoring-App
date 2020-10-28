export default function (role){
    switch(role){
        case 'admin':
            return({
                username:"admin",
                password:"admin",
                full_name:"Mike Ross",
                avatar: require("./../images/avatars/1.jpg"),
                role:"System Admin"
            })
        case 'user':
        default:
            return({
                username: "user",
                password: "user",
                full_name: "Jane Doe",
                avatar: require("./../images/avatars/0.jpg"),
                role: 'System User',
            })
    }
}