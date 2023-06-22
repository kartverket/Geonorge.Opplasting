// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";


const DatasetDetailsPage = ({datasetItem}) => {

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

    return (
            
            <content-container>
                <breadcrumb-list id="breadcrumb-list" breadcrumbs={JSON.stringify(breadcrumbs)}></breadcrumb-list>
                <h4>{datasetItem.title} </h4>
                <h4>{datasetItem.id}</h4>
               


            </content-container>
           
    );
};

export default DatasetDetailsPage;
