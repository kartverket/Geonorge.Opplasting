// Dependencies
import React, { Fragment, useContext } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { BodyText, GnButton, GnFieldContainer, HeadingText } from "@kartverket/geonorge-web-components";

import AuthContext from "../../store/AuthContext";

const AccessRoles = () => {
    const { roles, organizationName, setRoles, setOrganizationName } = useContext(AuthContext);

    const handleAdminButtonClick = () => {
        setRoles(["nd.metadata_admin"]);
        setOrganizationName(null);
    };

    const handleDatasetOwnerButtonClick = () => {
        setRoles(["nd.gjenbruk"]);
        setOrganizationName("Kartverket");
    };

    const handleUploaderButtonClick = () => {
        setRoles(["nd.gjenbruk", "nd.admenhet", "nd.dag"]);
        setOrganizationName(null);
    };

    return (
        <Fragment>
            <heading-text>
                <h2>Velg rolle</h2>
            </heading-text>
            <body-text>
                Dette er kun en foreløpig løsning til vi får på plass innlogging. Kun til bruk for brukertesting
            </body-text>
            <gn-field-container block="">
                <gn-button color="primary">
                    <button onClick={handleAdminButtonClick}>Admin</button>
                </gn-button>
                <gn-button color="primary">
                    <button onClick={handleDatasetOwnerButtonClick}>Datasetteier</button>
                </gn-button>
                <gn-button color="primary">
                    <button onClick={handleUploaderButtonClick}>Brukeropplaster</button>
                </gn-button>
                <div>
                    Bruker:
                    <ul>
                        <li>Organisasjon: {organizationName}</li>
                        <li>
                            Roller:
                            <ul>{roles?.length && roles.map((role) => <li key="role">{role}</li>)}</ul>
                        </li>
                    </ul>
                </div>
                <gn-button color="primary">
                    <button
                        onClick={() => {
                            setRoles(null);
                            setOrganizationName(null);
                        }}
                    >
                        Logg ut
                    </button>
                </gn-button>
            </gn-field-container>
        </Fragment>
    );
};

export default AccessRoles;
