// Dependencies
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

// Components
// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, MainNavigation, GeonorgeFooter } from "@kartverket/geonorge-web-components";


const Layout = (props) => {   
    return (
       <Fragment>
         <main-navigation environment="dev"></main-navigation>
            <content-container>
                <Outlet />
                <geonorge-footer />
            </content-container>
        </Fragment>
    );
};

export default Layout;
