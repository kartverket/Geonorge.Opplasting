// Dependencies
import React, { useRef }  from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButto, GnFieldContainer, GnInput, GnLabel, BodyText } from "@kartverket/geonorge-web-components";




const NewdatasetForm = () => {
    
    const titleInputRef = useRef();   
    const metadataUuidInputRef = useRef();  
    const contactEmail = useRef();
    const contactName = useRef();
    const ownerOrganization = useRef();
    const requiredRoleInputRef = useRef(); 



    const handleSubmit = (event) => {
        const datasetForm = {
            title: titleInputRef.current.value,  
            metadataUuid: metadataUuidInputRef.current.value,       
            contactEmail: contactEmail.current.value,
            contactName: contactName.current.value,
            ownerOrganization: ownerOrganization.current.value,
            requiredRole: requiredRoleInputRef.current.value
        };
        event.preventDefault();
        fetch("https://opplasting.dev.geonorge.no/api/Dataset", {
            method: "POST",
            body: JSON.stringify(datasetForm),
            headers: {
                "Content-Type": "application/json"
                // TOKEN:
            }
        });
    };
    return (
                <content-container><body-text>Fyll inn feltene for å opprette et nytt datasett.</body-text>
                <form onSubmit={handleSubmit}>
                    <gn-field-container block="">
                        <gn-label block=""><label for="tittel">Tittel</label></gn-label>
                        <gn-input><input ref={titleInputRef} id="tittel" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="metadataUuid">Metadata uuid</label></gn-label>
                        <gn-input><input ref={metadataUuidInputRef} id="metadataUuid" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="kontaktperson">Kontaktperson</label></gn-label>
                        <gn-input><input ref={contactName} id="kontaktperson" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="epost">E-post</label></gn-label>
                        <gn-input><input ref={contactEmail} id="epost" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="eier">Eier</label></gn-label>
                        <gn-input><input ref={ownerOrganization} id="eier" /></gn-input>
                    </gn-field-container>
                    <gn-field-container block="">
                        <gn-label block=""><label for="requiredRole">Påkrevd rolle</label></gn-label>
                        <gn-input><input ref={requiredRoleInputRef} id="requiredRole" /></gn-input>
                    </gn-field-container>                    
                    <gn-button color="primary"><button onClick={handleSubmit}>Opprett nytt datasett</button></gn-button>
                    </form>
                </content-container>
    );
};

export default NewdatasetForm;
