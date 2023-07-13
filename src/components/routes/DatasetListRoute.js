// Dependencies
import React, { Fragment } from "react";
import { useLoaderData } from "react-router";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";

// Components
import DatasetList from "../partials/DatasetList";

const Dataset = () => {
    const loaderData = useLoaderData();

    const breadcrumbs = [
        {
            name: "Forside",
            url: "/"
        },
        {
            name: "Datasett",
            url: "/dataset"
        }
    ];

    return (
        <Fragment>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs={JSON.stringify(breadcrumbs)}></breadcrumb-list>
            <heading-text>
                <h1 underline="true">Datasett </h1>
            </heading-text>
            <DatasetList datasetItems={loaderData?.datasetItems} />
        </Fragment>
    );
};

export default Dataset;
