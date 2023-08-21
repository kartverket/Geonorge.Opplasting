// Dependencies
import React, { Fragment, useContext } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { HeadingText } from "@kartverket/geonorge-web-components";

// Components
import AuthContext from "../../store/AuthContext";
import SignedInPage from "../partials/pages/SignedInPage";
import SignedOutPage from "../partials/pages/SignedOutPage";

// Utils
import { renderBreadcrumbs } from "../../utils/breadcrumbs";

const Home = () => {
    const { roles } = useContext(AuthContext);

    const renderSignedOutContent = () => {
        return <SignedOutPage />;
    };

    const renderSignedInContent = () => {
        return <SignedInPage />;
    };

    const breadcrumbs = [
        { name: "Geonorge", url: "https://www.geonorge.no/" },
        { name: "Opplastingsklienten", url: "/" }
    ];

    return (
        <Fragment>
            {renderBreadcrumbs(breadcrumbs)}
            <heading-text>
                <h1 underline="true">Opplastingsklienten </h1>
            </heading-text>
            {roles?.length ? renderSignedInContent() : renderSignedOutContent()}
        </Fragment>
    );
};

export default Home;
