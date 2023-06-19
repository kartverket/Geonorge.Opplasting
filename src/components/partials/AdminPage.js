// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";


const AdminPage = () => {
    return (
        <content-container>
            <div id="main-content">
                <heading-text>
                    <h1>Adminsiden </h1>
                </heading-text>                
            <p><a href="admin/newDataset">Nytt datasett</a></p>
            </div>
        </content-container>
    );
};

export default AdminPage;
