// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import DatasetList from "../partials/DatasetList";
import { useLoaderData } from "react-router";



const Dataset = () => {

    const { datasetItems } = useLoaderData();



  

    return (
       
           <Fragment>
                <heading-text>
                    <h1 underline="true">Datasett </h1>
                </heading-text>
                <DatasetList datasetItems={datasetItems} />
            </Fragment>
         
    );
};

export default Dataset;
