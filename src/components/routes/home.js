// Dependencies
import React, { Fragment, useContext } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";

import AccessRoles from "../partials/AccessRoles";
import AuthContext from "../../store/AuthContext";
import SignedInPage from "../partials/home/SignedInPage";

const Home = () => {
    const { role, setRole } = useContext(AuthContext);

    const renderSignedOutContent = () => {
        return <AccessRoles />;
    };

    const renderSignedInContent = (role) => {
        return (
            <div>
                {"Logged in as " + role}
                <gn-button color="primary">
                    <button
                        onClick={() => {
                            setRole(null);
                        }}
                    >
                        Logg ut
                    </button>
                </gn-button>
                <SignedInPage />
            </div>
        );
    };

    return (
        <Fragment>
            <heading-text>
                <h1 underline="true">Opplastingsklienten </h1>
            </heading-text>
            {role ? renderSignedInContent(role) : renderSignedOutContent()}
        </Fragment>
    );
};

export default Home;
