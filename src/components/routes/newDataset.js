// Dependencies
import { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { BreadcrumbList, ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import NewDatasetForm from "../partials/NewDatasetForm";
// eslint-disable-next-line no-unused-vars



const Newdataset = () => {
    return (
        <Fragment>
                <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;Admin&quot;,&quot;url&quot;:&quot;/admin&quot;},{&quot;name&quot;:&quot;Nytt datasett&quot;,&quot;url&quot;:&quot;https://kartverket.github.io/Geonorge.WebComponents/iframe.html?viewMode=story&amp;id=*&quot;}]"></breadcrumb-list>
            <heading-text>
                <h1 underline="true">Skjema for dataset</h1>
            </heading-text>
           
            <NewDatasetForm />
        </Fragment>
    );
};

export default Newdataset;
