// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButton, HeadingText } from "@kartverket/geonorge-web-components";

const AccessRoles = () => {
    return (
        <React.Fragment>
            <heading-text><h2>Velg rolle</h2></heading-text>
            <gn-button color="primary"><a href="/admin">Admin</a></gn-button>
            <gn-button color="primary"><a href="/datasetowner">Datasetteier</a></gn-button>
            <gn-button color="primary"><a href="/userpage">Brukeropplaster</a></gn-button>
        </React.Fragment>
    );
};

export default AccessRoles;
