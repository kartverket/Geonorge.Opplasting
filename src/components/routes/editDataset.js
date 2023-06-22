// Dependencies
import React, { Fragment } from "react";
import { useLoaderData } from "react-router";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import EditDatasetPage from "../partials/EditDatasetPage"


const EditDataset = () => {

    

    const { datasetItem } = useLoaderData();

    return (
       
           <Fragment>
                <heading-text>
                    <h1 underline="true">rediger dataset </h1>
                </heading-text>

                <EditDatasetPage datasetItem={datasetItem} />
            </Fragment>
         
    );
};

export default EditDataset;
