// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import DatasetDetailsPage from "../partials/home/DatasetDetailsPage";
import { useLoaderData } from "react-router";

const DatasetDetails = () => {

    const { datasetItem } = useLoaderData();

    return (
            
            <DatasetDetailsPage datasetItem={datasetItem} />
           
    );
};

export default DatasetDetails;
