// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import  AccessRoles from "../partials/AccessRoles";


const Home = () => {
    return (
        <content-container>
            <div id="main-content">
                <heading-text>
                    <h1>Opplastingsklienten </h1>
                </heading-text>

                <AccessRoles />

            </div>
        </content-container>
    );
};

export default Home;
