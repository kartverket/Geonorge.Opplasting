// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import FilelistHistory from "../partials/FilelistHistory";
import DatasetUpload from "./datasetUpload";

const UserPage = () => {
    return (
        <content-container>
            <div id="main-content">
            <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;}]"></breadcrumb-list>
                <heading-text>
                    <h1 underline="true">User page datasett uploader</h1>
                </heading-text>
                <body-text>
                   <FilelistHistory />
                    <DatasetUpload />
                </body-text>
            </div>
        </content-container>
    );
};

export default UserPage;
