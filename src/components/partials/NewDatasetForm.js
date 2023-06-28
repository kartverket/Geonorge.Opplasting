// Dependencies
import React, { useRef } from "react";
import { useState } from 'react';

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButto, GnFieldContainer, GnInput, GnLabel, BodyText } from "@kartverket/geonorge-web-components";
import AllowedFileformats from "./AllowedFileformats";

const NewDatasetForm = (props) => {

   const [data, setData] = useState('');

   const handleFileFormatChange = (event) => {
      console.log(event.target.checked);
      console.log(event.target.value);
      //todo setData(x);

   }

   const titleInputRef = useRef();
   const metadataUuidInputRef = useRef();
   const contactEmail = useRef();
   const contactName = useRef();
   const ownerOrganization = useRef();
   const requiredRoleInputRef = useRef();
   const requireValidFileInputRef = useRef();

   const handleSubmit = (event) => {
      var requireValidFile = requireValidFileInputRef.current.checked;
      const datasetForm = {
         title: titleInputRef.current.value,
         metadataUuid: metadataUuidInputRef.current.value,
         contactEmail: contactEmail.current.value,
         contactName: contactName.current.value,
         ownerOrganization: ownerOrganization.current.value,
         requiredRole: requiredRoleInputRef.current.value,
         requireValidFile: requireValidFile,
         allowedFileFormats : ['gml'] //todo get from component
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
               <gn-label block=""><label htmlFor="tittel">Tittel</label></gn-label>
               <gn-input><input ref={titleInputRef} id="tittel" /></gn-input>
            </gn-field-container>
            <gn-field-container block="">
               <gn-label block=""><label htmlFor="metadataUuid">Metadata uuid</label></gn-label>
               <gn-input><input ref={metadataUuidInputRef} id="metadataUuid" /></gn-input>
            </gn-field-container>
            <gn-field-container block="">
               <gn-label block=""><label htmlFor="kontaktperson">Kontaktperson</label></gn-label>
               <gn-input><input ref={contactName} id="kontaktperson" /></gn-input>
            </gn-field-container>
            <gn-field-container block="">
               <gn-label block=""><label htmlFor="epost">E-post</label></gn-label>
               <gn-input><input ref={contactEmail} id="epost" /></gn-input>
            </gn-field-container>
            <gn-field-container block="">
               <gn-label block=""><label htmlFor="eier">Eier</label></gn-label>
               <gn-input><input ref={ownerOrganization} id="eier" /></gn-input>
            </gn-field-container>
            <gn-field-container block="">
               <gn-label block=""><label htmlFor="requiredRole">Påkrevd rolle</label></gn-label>
               <gn-input><input ref={requiredRoleInputRef} id="requiredRole" /></gn-input>
            </gn-field-container>
            <AllowedFileformats allowedFileformats={props.allowedFileformats} handleFileFormatChange={handleFileFormatChange} />
            <gn-field-container block="">
               <input value="true" type="checkbox" ref={requireValidFileInputRef} id="requireValidFile" />
               <label htmlFor="requireValidFile">Kreve at fil må være gyldig for å få legge inn</label>
            </gn-field-container>
            <gn-button color="primary"><button onClick={handleSubmit}>Opprett nytt datasett</button></gn-button>
         </form>
      </content-container>
   );
};

export default NewDatasetForm;
