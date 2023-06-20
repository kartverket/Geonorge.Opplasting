// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import DatasetList from "../DatasetList";

const BasicUserPage = (props) => {


    return (
        <Fragment>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;username?&quot;,&quot;url&quot;:&quot;/datasetOwn&quot;}]"></breadcrumb-list>
                <heading-text>
                    <h1 underline="true">User page datasett uploader</h1>
                </heading-text>
                <body-text>
                   
                    <DatasetList datasetItems={props.datasetItems} />
                   
                </body-text>
           </Fragment>
    );
};

export default BasicUserPage;
