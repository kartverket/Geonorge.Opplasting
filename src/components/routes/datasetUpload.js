// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import DatasetSelector from "../partials/DatasetSelector";

const DatasetUpload = () => {
    return (
            <div id="main-content">
            <heading-text>
                <h2 underline="true">Laste opp data basert på tilganger til datasett</h2>
            </heading-text>
            <DatasetSelector />
               
            </div>
    );
};

export default DatasetUpload;
