// Dependencies
import React, { Fragment } from "react";
import { useLoaderData } from "react-router";

// Components
import DatasetDetailsPage from "../partials/pages/DatasetDetailsPage";

// Utils
import { renderBreadcrumbs } from "../../utils/breadcrumbs";

const DatasetDetails = () => {
    const loaderData = useLoaderData();
    const datasetItem = loaderData?.datasetItem;

    const breadcrumbs = [
        { name: "Geonorge", url: "https://www.geonorge.no/" },
        { name: "Opplastingsklienten", url: "/" },
        { name: "Datasett", url: "/dataset" },
        { name: datasetItem?.title ? datasetItem.title : "", url: datasetItem?.id ? `/dataset/${datasetItem.id}` : "" }
    ];

    return (
        <Fragment>
            {renderBreadcrumbs(breadcrumbs)}
            <DatasetDetailsPage datasetItem={datasetItem} />
        </Fragment>
    );
};

export default DatasetDetails;
