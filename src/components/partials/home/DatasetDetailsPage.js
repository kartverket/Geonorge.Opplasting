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
            "url": `/datasetDetails/${datasetItem.id}`
        }

    ]

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
                <gn-button color="primary"><button>Last opp fil til gjeldende dataset</button></gn-button>
             <heading-text><h3>Tidligere opplastede filer</h3></heading-text>            
            <FilelistHistory datasetItem={datasetItem} />

            </Fragment>

    );
};

export default DatasetDetailsPage;
