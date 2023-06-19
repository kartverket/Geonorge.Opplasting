// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";


const AdminPage = () => {
    return (
        <content-container>
            <div id="main-content">
            <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;Admin&quot;,&quot;url&quot;:&quot;/admin&quot;}]"></breadcrumb-list>
                <heading-text>
                    <h1>Adminsiden </h1>
                </heading-text>                
            <p><a href="admin/newDataset">Nytt datasett</a></p>
            </div>
        </content-container>
    );
};

export default AdminPage;
