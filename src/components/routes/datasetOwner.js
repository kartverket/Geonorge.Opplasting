// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, BreadcrumbList } from "@kartverket/geonorge-web-components";

const DatasetOwner = () => {
    return (
        <content-container>
            <div id="main-content">
            <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;owner?&quot;,&quot;url&quot;:&quot;/datasetOwn&quot;}]"></breadcrumb-list>
            <heading-text>
                <h2 underline="true">Side for datasetteier</h2>
            </heading-text>
            
               
            </div>
        </content-container>
    );
};

export default DatasetOwner;
