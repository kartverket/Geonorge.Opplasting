// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { HeadingText, BreadcrumbList } from "@kartverket/geonorge-web-components";

import OrganisationInfo from "../OrganisationInfo";
import DatasetList from "../DatasetList";
import { useLoaderData } from "react-router";
import FilelistHistory from "../FilelistHistory";

const SignedInPage = (props) => {
    const loaderData = useLoaderData();

    const breadcrumbs = [
        { name: "Forsiden", url: "/" }
    ];

    return (
        <Fragment>
            <breadcrumb-list
                id="breadcrumb-list"
                breadcrumbs={JSON.stringify(breadcrumbs)}
            ></breadcrumb-list>
            <heading-text>
                <h2 underline="true">Side for datasetteier</h2>
            </heading-text>
            <p>
                <a href="dataset/new">Nytt datasett</a>
            </p>
            <OrganisationInfo />
            <DatasetList datasetItems={loaderData?.datasetItems} />
        </Fragment>
    );
};

export default SignedInPage;
