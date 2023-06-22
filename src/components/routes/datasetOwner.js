// Dependencies
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useLoaderData } from "react-router-dom";



// Geonorge WebComponents


import DatasetOwnerPage from "../partials/home/DatasetOwnerPage";

const DatasetOwner = () => {

    const { datasetItems } = useLoaderData();


    return (
       <DatasetOwnerPage datasetItems={datasetItems}/>
    );
};

export default DatasetOwner;
