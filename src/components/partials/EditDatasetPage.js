// Dependencies
import React, { Fragment, useRef, useState } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import axios from 'axios';

const EditDatasetPage = ({ datasetItem }) => {

   const breadcrumbs = [
      {
         "name": "Forside",
         "url": "/"
      },
      {
         "name": datasetItem.title,
         "url": `/datasetDetails/${datasetItem.id}`
      }

   ]
   const [showSuccessDialog, setShowSuccessDialog] = useState(false);
   const [showErrorDialog, setShowErrorDialog] = useState(false);

   const [errorMessage, setErrorMessage] = useState();

   const titleInputRef = useRef();
   const metadataUuidInputRef = useRef();
   const contactEmailInputRef = useRef();
   const contactNameInputRef = useRef();
   const ownerOrganizationInputRef = useRef();
   const requiredRoleInputRef = useRef();



   const handleSubmit = async (event) => {

      event.preventDefault();
      setShowErrorDialog(false);
      setShowSuccessDialog(false);
      const datasetForm = {
         title: titleInputRef.current.value,
         metadataUuid: metadataUuidInputRef.current.value,
         contactEmail: contactEmailInputRef.current.value,
         contactName: contactNameInputRef.current.value,
         ownerOrganization: ownerOrganizationInputRef.current.value,
         requiredRole: requiredRoleInputRef.current.value
      };

      try {
         const response = await axios.put(`https://opplasting.dev.geonorge.no/api/Dataset/${datasetItem.id}`, datasetForm);

         if (response.data) {
            setShowSuccessDialog(true)
            // Sett data i state her
         }
      } catch (error) {
         setShowErrorDialog(true);

         if (error.response?.data) {
            const messages = Object.values(error.response.data).map(value => value.join(', '));
            setErrorMessage(messages.join('\r\n'));
         } else {
            setErrorMessage(error.message);
         }                
      }


      /*fetch(`https://opplasting.dev.geonorge.no/api/Dataset/${datasetItem.id}`, {
         method: "PUT",
         body: JSON.stringify(datasetForm),
         headers: {
            "Content-Type": "application/json"
            // TOKEN:
         }
      }).then(response => {
         if (response.ok) {
            setShowSuccessDialog(true)
         }
         response.json().then(errorMessagesForAllFields => {
            console.log(errorMessagesForAllFields);
            debugger;
            const errorMessagesString = Object.keys(errorMessagesForAllFields).map(errorMessagesForFieldKey => {
               const errorMessagesForField = errorMessagesForAllFields[errorMessagesForFieldKey];
               const errorMessagesForFieldString = errorMessagesForField.map(errorMessage => {
                  return `${errorMessagesForFieldKey}: ${errorMessage}`
               })
               return errorMessagesForFieldString;
            }).join(", ");
            console.log(errorMessagesString);
            throw new Error(errorMessagesString)
         })
      }).catch(error => {
         console.log("Y=BR=")
         setShowErrorDialog(true);
         setErrorMessage(error.message);
      });*/
   };

   return (
      <Fragment>
         <content-container>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs={JSON.stringify(breadcrumbs)}></breadcrumb-list>
            <h4>{datasetItem.title} </h4>
            <body-text>Fyll inn feltene for å opprette et nytt datasett.</body-text>
            <form onSubmit={handleSubmit}>
               <gn-field-container block="">
                  <gn-label block=""><label for="tittel">Tittel</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.title} ref={titleInputRef} id="tittel" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label for="metadataUuid">Metadata uuid</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.metadataUuid} ref={metadataUuidInputRef} id="metadataUuid" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label for="kontaktperson">Kontaktperson</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.contactName} ref={contactNameInputRef} id="kontaktperson" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label for="epost">E-post</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.contactEmail} ref={contactEmailInputRef} id="epost" />
                  </gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label for="eier">Eier</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.ownerOrganization} ref={ownerOrganizationInputRef} id="eier" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label for="requiredRole">Påkrevd rolle</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.requiredRole} ref={requiredRoleInputRef} id="requiredRole" /></gn-input>
               </gn-field-container>
               <gn-button color="primary"><button onClick={handleSubmit}>Lagre</button></gn-button>
            </form>
         </content-container>


         <gn-dialog show={showSuccessDialog} width="" overflow="">
            <body-text>
               Datasett oppdatert!
            </body-text>
         </gn-dialog>

         <gn-dialog show={showErrorDialog} width="" overflow="">
            <body-text>
               Lagring feilet fordi {errorMessage}
            </body-text>
         </gn-dialog>

      </Fragment>
   );
};

export default EditDatasetPage;
