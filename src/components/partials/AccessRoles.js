// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButton, HeadingText } from "@kartverket/geonorge-web-components";

const AccessRoles = () => {
    return (
        <React.Fragment>
            <heading-text><h2>Velg rolle</h2></heading-text>
            <gn-button color="primary"><button>Admin</button></gn-button>
            <gn-button color="primary"><button>Datasetteier</button></gn-button>
            <gn-button color="primary"><a href="/datasetUpload">Brukeropplaster</a></gn-button>
        </React.Fragment>
    );
};

export default AccessRoles;
