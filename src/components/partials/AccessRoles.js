// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButton, HeadingText } from "@kartverket/geonorge-web-components";

const AccessRoles = () => {
    return (
        <React.Fragment>
            <content-container>
            <heading-text><h2>Velg rolle</h2></heading-text>
            <body-text>Dette er kun en foreløpig løsning til vi får på plass innlogging. Kun til bruk for brukertesting</body-text>
                <gn-field-container block="">
                    <gn-button color="primary"><a href="/admin">Admin</a></gn-button>
                    <gn-button color="primary"><a href="/datasetowner">Datasetteier</a></gn-button>
                    <gn-button color="primary"><a href="/userpage">Brukeropplaster</a></gn-button>
                </gn-field-container>
            </content-container>
        </React.Fragment>
    );
};  

export default AccessRoles;
