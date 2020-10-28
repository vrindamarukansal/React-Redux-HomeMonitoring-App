import React from "react";
import { Container} from "shards-react";
import UserDetails from "../components/User/UserDetails";

const AccountSettings = () => (
    <Container fluid className="main-content-container px-4 pt-4">
            <div header="Your Account" className="m-0 p-0">
                    <UserDetails title="Account Information"/>
        </div>  
    </Container>
);

export default AccountSettings;