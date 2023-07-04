// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import FilelistHistory from "../FilelistHistory";


const DatasetDetailsPage = ({ datasetItem }) => {

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [showValidationErrorDialog, setShowValidationErrorDialog] = useState(false);
    var requireValidFileSelection = true;
    
    const breadcrumbs = [
        {
            "name": "Forside",
            "url": "/"
        },
        {
            "name": datasetItem.title,
            "url": `/dataset/${datasetItem.id}`
        }

    ]


    const [data, setData] = useState('');

    const onFileChange = (event) => {

        setData({selectedFile: event.target.files[0] });
  
     }

    
    const getAllowedFileFormats = () => {
        
        var format = "";
        console.log(datasetItem.allowedFileFormats);
        for (var i=0; i < datasetItem.allowedFileFormats.length; i++) {
            format = format + "." + datasetItem.allowedFileFormats[i].extension;
            if(i < datasetItem.allowedFileFormats.length -1)
                format = format + ",";
        }  


        return format;
  
     }

     const showValidationDialogError = () => {
        setShowValidationErrorDialog(false);
        setTimeout(() => {
            setShowValidationErrorDialog(true);
        });
    };

    const hideValidationDialogError = () => {
        setShowValidationErrorDialog(true);
        setTimeout(() => {
            setShowValidationErrorDialog(false);
        });
    };

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

    const hideDialogErrorBox = () => {
        setShowErrorDialog(true);
        setTimeout(() => {
            setShowErrorDialog(false);
        });
    };

    const handleUploadAllowErrorClick = async (event) => {

        requireValidFileSelection = false;
        hideValidationDialogError();
        handleUploadClick(event);
    };

     const handleUploadClick = async (event) => {
        try 
        {
            const formData = new FormData();
    
            formData.append(
                "file",
                data.selectedFile,
                data.selectedFile.name
            );
            formData.append(
                "datasetId",
                datasetItem.id
            );
            
            formData.append(
                "requireValidFile",
                requireValidFileSelection
            );

            const response = await axios.post("https://opplasting.dev.geonorge.no/api/Dataset/file", formData);

            if (response.data) {
                setShowSuccessDialogBox();
            }
        } 
        catch (error) {
            showDialogErrorBox();
            if(error.response?.status === 422)
            {
                var messages = error.response.data;
                setErrorMessage(messages);
                hideDialogErrorBox();
                showValidationDialogError();
            }
            else if (error.response?.data) {

               const messages = error.response?.data?.title;
               setErrorMessage(messages);
            } else {
               setErrorMessage(error.message);
            }                
        }

     };





    return (

        <Fragment>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs={JSON.stringify(breadcrumbs)}></breadcrumb-list>

            <heading-text><h2>{datasetItem.title} </h2></heading-text>
            <gn-bodytext>
                <p>{datasetItem.contactName}</p>
                <p>{datasetItem.contactEmail}</p>
                <p>{datasetItem.ownerOrganization}</p>
                <p>{datasetItem.requiredRole}</p>
                <p><Link to="edit">Redigere datasettet</Link>  </p>




            </gn-bodytext>  
               <gn-label for="fil">Fil: </gn-label> ({getAllowedFileFormats()})<input id="fil" accept={getAllowedFileFormats()} type="file" onChange={onFileChange}></input> 
                <gn-button color="primary"><button onClick={handleUploadClick}>Last opp fil til gjeldende dataset</button></gn-button>
             <heading-text><h3>Tidligere opplastede filer</h3></heading-text>            
            <FilelistHistory datasetItem={datasetItem} />

            <gn-dialog show={showSuccessDialog} width="" overflow="">
            <body-text>
               Fil er lastet opp
            </body-text>
            </gn-dialog>

            <gn-dialog show={showErrorDialog} width="" overflow="">
                <body-text>
                {errorMessage}
                </body-text>
            </gn-dialog>

            <gn-dialog show={showValidationErrorDialog} width="" overflow="">
                <body-text>
                {errorMessage}
                <div>
                <a href='https://validator.geonorge.no/' target='_blank' rel="noreferrer">Gå til validator for å validere</a>
                </div>
                {!datasetItem.requireValidFile &&
                <div>
                <gn-button color="primary"><button onClick={handleUploadAllowErrorClick}>Last opp fil med feil</button></gn-button>
                </div>
                }
                </body-text>
            </gn-dialog>


        </Fragment>

    );
};

export default DatasetDetailsPage;
