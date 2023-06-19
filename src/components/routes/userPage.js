// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";

const UserPage = () => {
    return (
        <content-container>
            <div id="main-content">
            <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;user&quot;,&quot;url&quot;:&quot;/datasetOwn&quot;}]"></breadcrumb-list>
                <heading-text>
                    <h1>User page datasett uploader</h1>
                </heading-text>
                <p>Siden finnes</p>
            </div>
        </content-container>
    );
};

export default UserPage;
