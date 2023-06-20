// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, BreadcrumbList } from "@kartverket/geonorge-web-components";
// eslint-disable-next-line no-unused-vars
import FilelistHistory from "../FilelistHistory";
import OrganisationInfo from "../OrganisationInfo";

const DatasetOwnerPage = () => {
    return (
        <Fragment>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;owner&quot;,&quot;url&quot;:&quot;/datasetOwn&quot;}]"></breadcrumb-list>
            <heading-text>
                <h2 underline="true">Side for datasetteier</h2>
            </heading-text>
            <p><a href="admin/newDataset">Nytt datasett</a></p> 
           <OrganisationInfo />
            <FilelistHistory />
       </Fragment>
    );
};

export default DatasetOwnerPage;
