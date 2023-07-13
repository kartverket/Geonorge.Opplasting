// Dependencies
import React, { Fragment } from "react";
import { useLoaderData } from "react-router";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { BreadcrumbList } from "@kartverket/geonorge-web-components";

// Components
import DatasetDetailsPage from "../partials/pages/DatasetDetailsPage";

const DatasetDetails = () => {
    const loaderData = useLoaderData();
    const datasetItem = loaderData?.datasetItem;

    const breadcrumbs = [
        { name: "Geonorge", url: "https://www.geonorge.no/" },
        { name: "Forside", url: "/" },
        { name: "Datasett", url: "/dataset" },
        { name: datasetItem?.title ? datasetItem.title : "", url: datasetItem?.id ? `/dataset/${datasetItem.id}` : "" }
    ];

    return (
        <Fragment>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs={JSON.stringify(breadcrumbs)}></breadcrumb-list>
            <DatasetDetailsPage datasetItem={datasetItem} />
        </Fragment>
    );
};

export default DatasetDetails;
