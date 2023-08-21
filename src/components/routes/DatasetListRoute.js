// Dependencies
import React, { Fragment } from "react";
import { useLoaderData } from "react-router";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { HeadingText } from "@kartverket/geonorge-web-components";

// Components
import DatasetList from "../partials/DatasetList";

// Utils
import { renderBreadcrumbs } from "../../utils/breadcrumbs";

const Dataset = () => {
    const loaderData = useLoaderData();

    const breadcrumbs = [
        { name: "Geonorge", url: "https://www.geonorge.no/" },
        { name: "Opplastingsklienten", url: "/" },
        { name: "Datasett", url: "/dataset" }
    ];

    return (
        <Fragment>
            {renderBreadcrumbs(breadcrumbs)}
            <heading-text>
                <h1 underline="true">Datasett </h1>
            </heading-text>
            <DatasetList datasetItems={loaderData?.datasetItems} />
        </Fragment>
    );
};

export default Dataset;
