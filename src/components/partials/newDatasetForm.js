// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButto, GnFieldContainer, GnInput, GnLabel, BodyText } from "@kartverket/geonorge-web-components";

const NewdatasetForm = () => {
    return (
            <div id="main-content">
                <content-container><body-text>Fyll inn feltene for å opprette et nytt datasett.</body-text>
                    <gn-field-container block="">
                        <gn-label block=""><label for="tittel">Tittel</label></gn-label>
                        <gn-input><input id="tittel" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="uuid">UUID</label></gn-label>
                        <gn-input><input id="uuid" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="kontaktperson">Kontaktperson</label></gn-label>
                        <gn-input><input id="kontaktperson" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="epost">E-post</label></gn-label>
                        <gn-input><input id="epost" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="eier">Eier</label></gn-label>
                        <gn-input><input id="eier" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="rolle">Rolle</label></gn-label>
                        <gn-input><input id="rolle" /></gn-input>
                    </gn-field-container>
                    <gn-button color="primary"><button>Lagre datasett</button></gn-button>
                </content-container>
            </div>
    );
};

export default NewdatasetForm;
