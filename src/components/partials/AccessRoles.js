// Dependencies
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { BodyText, GnFieldContainer, GnButton, HeadingText } from "@kartverket/geonorge-web-components";

import AuthContext from "../../store/AuthContext";

const AccessRoles = () => {
    const { setRole } = useContext(AuthContext);

    const handleButtonClick = (role) => {
        setRole(role); 
    }

    return (
        <Fragment>
            <heading-text><h2>Velg rolle</h2></heading-text>
            <body-text>Dette er kun en foreløpig løsning til vi får på plass innlogging. Kun til bruk for brukertesting</body-text>
                <gn-field-container block="">
                    <gn-button color="primary"><button onClick={() => {handleButtonClick("administrator");}}>Admin</button></gn-button>
                    <gn-button color="primary"><button onClick={() => {handleButtonClick("datasetOwner")}}>Datasetteier</button></gn-button>
                    <gn-button color="primary"><button onClick={() => {handleButtonClick("uploader")}}>Brukeropplaster</button></gn-button>
                    <heading-text><h3>Se alle datasettene her:</h3> </heading-text>
                    <p><Link to="dataset">Se alle datasett</Link></p>
                </gn-field-container>
            
        </Fragment>
    );
};  

export default AccessRoles;
