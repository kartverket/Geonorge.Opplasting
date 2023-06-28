// Dependencies
import React, { Fragment, useRef, useState } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import axios from 'axios';
import { Link } from "react-router-dom";
import AllowedFileformats from "./AllowedFileformats";

const EditDatasetPage = ({ datasetItem, allowedFileformats }) => {
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
   const requireValidFileInputRef = useRef();


   const [data, setData] = useState();

   const handleFileFormatChange = (event) => {
      console.log(data);
      var formats = data !== undefined ? data.slice() : '';
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

   const handleSubmit = async (event) => {
      var formats = [];
      var formatsSelected = data;
      if(formatsSelected === undefined && datasetItem.allowedFileFormats.length > 0)
      {
         for (var i=0; i < datasetItem.allowedFileFormats.length; i++) {
            formats.push(datasetItem.allowedFileFormats[i].extension);
        }  
        console.log(formats);
        setData(formats)
        formats = formatsSelected;
      }
      var requireValidFile = requireValidFileInputRef.current.checked;
      event.preventDefault();
      setShowErrorDialog(false);
      setShowSuccessDialog(false);
      const datasetForm = {
         title: titleInputRef.current.value,
         metadataUuid: metadataUuidInputRef.current.value,
         contactEmail: contactEmailInputRef.current.value,
         contactName: contactNameInputRef.current.value,
         ownerOrganization: ownerOrganizationInputRef.current.value,
         requiredRole: requiredRoleInputRef.current.value,
         requireValidFile: requireValidFile,
         allowedFileFormats : formats
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
   };


   return (
      <Fragment>
         <content-container>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs={JSON.stringify(breadcrumbs)}></breadcrumb-list>
            <h4>{datasetItem.title} </h4>
            <body-text>Fyll inn feltene for å opprette et nytt datasett.</body-text>
            <form onSubmit={handleSubmit}>
               <gn-field-container block="">
                  <gn-label block=""><label htmlFor="tittel">Tittel</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.title} ref={titleInputRef} id="tittel" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label htmlFor="metadataUuid">Metadata uuid</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.metadataUuid} ref={metadataUuidInputRef} id="metadataUuid" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label htmlFor="kontaktperson">Kontaktperson</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.contactName} ref={contactNameInputRef} id="kontaktperson" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label htmlFor="epost">E-post</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.contactEmail} ref={contactEmailInputRef} id="epost" />
                  </gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label htmlFor="eier">Eier</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.ownerOrganization} ref={ownerOrganizationInputRef} id="eier" /></gn-input>
               </gn-field-container>
               <gn-field-container block="">
                  <gn-label block=""><label htmlFor="requiredRole">Påkrevd rolle</label></gn-label>
                  <gn-input><input defaultValue={datasetItem.requiredRole} ref={requiredRoleInputRef} id="requiredRole" /></gn-input>
               </gn-field-container>
               <gn-field-container>
                  <AllowedFileformats allowedFileformats={allowedFileformats} datasetAllowedFileFormats={datasetItem.allowedFileFormats} handleFileFormatChange={handleFileFormatChange} />
               </gn-field-container>
               <gn-field-container block="">
               <input value="true" type="checkbox" defaultChecked={datasetItem.requireValidFile} ref={requireValidFileInputRef} id="requireValidFile" />
               <label htmlFor="requireValidFile">Kreve at fil må være gyldig for å få legge inn</label>
            </gn-field-container>
               <Link to={(`/dataset/${datasetItem.id}`)}>Avbryt</Link>
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
               {errorMessage}
            </body-text>
         </gn-dialog>

      </Fragment>
   );

};

export default EditDatasetPage;
