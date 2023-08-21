// Dependencies
import { Fragment } from "react";
import { useLoaderData } from "react-router";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { HeadingText } from "@kartverket/geonorge-web-components";

// Components
import NewDatasetForm from "../partials/NewDatasetForm";
import { renderBreadcrumbs } from "../../utils/breadcrumbs";

const Newdataset = () => {
    const { allowedFileformats } = useLoaderData();

    const breadcrumbs = [
        { name: "Geonorge", url: "https://www.geonorge.no/" },
        { name: "Opplastingsklienten", url: "/" },
        { name: "Datasett", url: "/dataset" },
        { name: "Nytt datasett", url: "/dataset/new" }
    ];

    return (
        <Fragment>
            {renderBreadcrumbs(breadcrumbs)}
            <heading-text>
                <h1 underline="true">Skjema for dataset</h1>
            </heading-text>
            <NewDatasetForm allowedFileformats={allowedFileformats} />
        </Fragment>
    );
};

export default Newdataset;
