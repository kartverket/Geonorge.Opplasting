// Dependencies
import React from "react";
import { useLoaderData } from "react-router-dom";
// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import BasicUserPage from "../partials/home/BasicUserPage";


const UserPage = () => {

    const { datasetItems } = useLoaderData();
    
    return (
       <BasicUserPage datasetItems={datasetItems} />
    );
};

export default UserPage;
