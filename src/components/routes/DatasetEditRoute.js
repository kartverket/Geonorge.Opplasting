// Dependencies
import React, { Fragment } from "react";
import { useLoaderData } from "react-router";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";

// Components
import EditDatasetPage from "../partials/EditDatasetPage";

const EditDataset = () => {
    const loaderData = useLoaderData();

    console.log({ loaderData });

    const datasetItem = loaderData?.datasetItem;
    const availableFileformats = loaderData?.availableFileformats;

    if (!datasetItem) {
        return "";
    }

    return (
        <Fragment>
            <heading-text>
                <h1 underline="true">rediger dataset </h1>
            </heading-text>
            <EditDatasetPage datasetItem={datasetItem} availableFileformats={availableFileformats} />
        </Fragment>
    );
};

export default EditDataset;
