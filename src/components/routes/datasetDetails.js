// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import DatasetDetailsPage from "../partials/DatasetDetailsPage";
import { useLoaderData } from "react-router";

const DatasetDetails = () => {
    const loaderData = useLoaderData();

    return <DatasetDetailsPage datasetItem={loaderData?.datasetItem} />;
};

export default DatasetDetails;
