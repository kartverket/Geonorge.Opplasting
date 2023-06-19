// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
// eslint-disable-next-line no-unused-vars
import NewdatasetForm from "../partials/NewDatasetForm";

const Newdataset = () => {
    return (
            <div id="main-content">
            <heading-text>
                <h1 underline="true">Skjema for dataset</h1>
            </heading-text>
           
            <NewdatasetForm />
                
            </div>
    );
};

export default Newdataset;
