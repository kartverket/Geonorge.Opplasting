// Dependencies
import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

// Components
// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, MainNavigation, GeonorgeFooter } from "@kartverket/geonorge-web-components";

// Stylesheets
import style from "./Layout.module.scss";

const Layout = (props) => {
    const layoutLoaderData = useLoaderData();
    return (
       <React.Fragment>
         <main-navigation environment="dev"></main-navigation>
            <content-container>
                <Outlet />
                <geonorge-footer />
            </content-container>
        </React.Fragment>
    );
};

export default Layout;
