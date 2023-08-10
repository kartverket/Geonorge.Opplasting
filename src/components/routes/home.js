// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import  AccessRoles from "../partials/AccessRoles";


const Home = () => {
    return (
       
           <Fragment>
                <heading-text>
                    <h1 underline="true">Opplastingsklienten </h1>
                </heading-text>

                <AccessRoles />
            </Fragment>
         
    );
};

export default Home;
