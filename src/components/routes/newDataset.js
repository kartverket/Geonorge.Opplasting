// Dependencies
import { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { BreadcrumbList, ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import NewDatasetForm from "../partials/NewDatasetForm";
import { useLoaderData } from "react-router";
// eslint-disable-next-line no-unused-vars
import { all } from "axios";




const Newdataset = () => {

    const {allowedFileformats} = useLoaderData();
    return (
        <Fragment>
                <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;Admin&quot;,&quot;url&quot;:&quot;/admin&quot;},{&quot;name&quot;:&quot;Nytt datasett&quot;,&quot;url&quot;:&quot;new&quot;}]"></breadcrumb-list>
            <heading-text>
                <h1 underline="true">Skjema for dataset</h1>
            </heading-text>
           
            <NewDatasetForm allowedFileformats={allowedFileformats} />
        </Fragment>
    );
};

export default Newdataset;
