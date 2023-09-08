// Dependencies
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, MainNavigation, GeonorgeFooter } from "@kartverket/geonorge-web-components";

const Layout = () => {
    return (
        <Fragment>
            <main-navigation environment="dev"></main-navigation>
            <content-container>
                <Outlet />
            </content-container>
            <geonorge-footer />
        </Fragment>
    );
};

export default Layout;
