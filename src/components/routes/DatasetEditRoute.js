// Dependencies
import React, { Fragment } from "react";
import { useLoaderData } from "react-router";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { HeadingText } from "@kartverket/geonorge-web-components";

// Components
import EditDatasetPage from "../partials/EditDatasetPage";

// Utils
import { renderBreadcrumbs } from "../../utils/breadcrumbs";

const EditDataset = () => {
    const loaderData = useLoaderData();

    const datasetItem = loaderData?.datasetItem;
    const availableFileformats = loaderData?.availableFileformats;

    const breadcrumbs = [
        { name: "Geonorge", url: "https://www.geonorge.no/" },
        { name: "Opplastingsklienten", url: "/" },
        { name: "Datasett", url: "/dataset" },
        { name: datasetItem?.title ? datasetItem.title : "", url: `/dataset/${datasetItem.id}` },
        { name: "Rediger datasett", url: `/dataset/${datasetItem.id}/edit` }
    ];

    if (!datasetItem) {
        return "";
    }

    return (
        <Fragment>
            {renderBreadcrumbs(breadcrumbs)}
            <heading-text>
                <h1 underline="true">Rediger datasett</h1>
            </heading-text>
            <EditDatasetPage datasetItem={datasetItem} availableFileformats={availableFileformats} />
        </Fragment>
    );
};

export default EditDataset;
