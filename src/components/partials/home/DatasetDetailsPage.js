// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";
import FilelistHistory from "../FilelistHistory";


const DatasetDetailsPage = ({ datasetItem }) => {

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


     const handleUploadClick = async (event) => {

        console.log("todo");
        //https://www.geeksforgeeks.org/file-uploading-in-react-js/
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
               <gn-label for="fil">Fil: </gn-label><input id="fil" accept={getAllowedFileFormats()} type="file"></input> 
                <gn-button color="primary"><button onClick={handleUploadClick}>Last opp fil til gjeldende dataset</button></gn-button>
             <heading-text><h3>Tidligere opplastede filer</h3></heading-text>            
            <FilelistHistory datasetItem={datasetItem} />

            </Fragment>

    );
};

export default DatasetDetailsPage;
