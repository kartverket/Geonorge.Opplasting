// Dependencies
import axios from 'axios';
import React, { Fragment, useRef } from "react";
import { useState } from 'react';

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButto, GnFieldContainer, GnInput, GnLabel, BodyText } from "@kartverket/geonorge-web-components";
import AllowedFileformats from "./AllowedFileformats";

const NewDatasetForm = (props) => {

   const [data, setData] = useState('');
   const [showSuccessDialog, setShowSuccessDialog] = useState(false);
   const [showErrorDialog, setShowErrorDialog] = useState(false);
   const [errorMessage, setErrorMessage] = useState();

   const handleFileFormatChange = (event) => {

      var formats = data.slice();
      if(formats === "")
         formats = [];
      if(event.target.checked)
         formats.push(event.target.value);
      else
      {
         var index = formats.indexOf(event.target.value)
            if (index > -1) {
               formats.splice(index, 1);
            }
      }
      setData(formats);

   }

   const titleInputRef = useRef();
   const metadataUuidInputRef = useRef();
   const contactEmail = useRef();
   const contactEmailExtra = useRef();
   const contactName = useRef();
   const ownerOrganization = useRef();
   const requiredRoleInputRef = useRef();
   const requireValidFileInputRef = useRef();

   const setShowSuccessDialogBox = () => {
      setShowSuccessDialog(false);
      setTimeout(() => {
          setShowSuccessDialog(true);
      });
  };


  const showDialogErrorBox = () => {
      setShowErrorDialog(false);
      setTimeout(() => {
          setShowErrorDialog(true);
      });
  };


   const handleSubmit = async (event) => {
      var requireValidFile = requireValidFileInputRef.current.checked;
      const datasetForm = {
         title: titleInputRef.current.value,
         metadataUuid: metadataUuidInputRef.current.value,
         contactEmail: contactEmail.current.value,
         contactEmailExtra: contactEmailExtra?.current?.value,
         contactName: contactName.current.value,
         ownerOrganization: ownerOrganization.current.value,
         requiredRole: requiredRoleInputRef.current.value,
         requireValidFile: requireValidFile,
         allowedFileFormats : data.length && data.length !== "" ? data : null
      };
      event.preventDefault();
      try {
         const response = await axios.post("https://opplasting.dev.geonorge.no/api/Dataset", datasetForm
         );
         console.log(response.data);
         if (response.data) {
            setShowSuccessDialogBox();
         }
      }
      catch(error)
      {
         showDialogErrorBox();

         if (error.response?.data) {
            const messages = Object.values(error.response.data).map(value => value.join(', '));
            setErrorMessage(messages.join('\r\n'));
         } else {
            setErrorMessage(error.message);
         }   
      }
   };

   return (
      <Fragment>
      <body-text>Fyll inn feltene for å opprette et nytt datasett.</body-text>
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
               <gn-label block=""><label htmlFor="epostExtra">E-post ekstra</label></gn-label>
               <gn-input><input ref={contactEmailExtra} id="epostExtra" /></gn-input>
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

         <gn-dialog show={showSuccessDialog} width="" overflow="">
            <body-text>
               Datasett lagt til!
            </body-text>
         </gn-dialog>

         <gn-dialog show={showErrorDialog} width="" overflow="">
            <body-text>
               {errorMessage}
            </body-text>
         </gn-dialog>

         </Fragment>
   );
};

export default NewDatasetForm;
