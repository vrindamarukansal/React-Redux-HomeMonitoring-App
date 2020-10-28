import React from "react";

const AppLogo = () => {
    return(
                <div className="d-table m-auto">
                        <img
                            id="main-logo"
                            className="d-inline-block"
                            style={{ maxWidth: "125px" }}
                            src={require("./../../images/logo.png")}
                            alt="Family HomeCareSpace"
                        />
                </div>
    )
}

export default AppLogo;