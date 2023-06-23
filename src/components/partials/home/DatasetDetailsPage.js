// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";


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
                <gn-bodytext>
                <h2>{datasetItem.title} </h2>
                <p>{datasetItem.contactName}</p>
                <p>{datasetItem.contactEmail}</p>
                <p>{datasetItem.ownerOrganization}</p>
                <p>{datasetItem.requiredRole}</p>
                


                </gn-bodytext>
               
               
<Link to="edit">Redigere datasettet</Link>


            </content-container>
           
    );
};

export default DatasetDetailsPage;
