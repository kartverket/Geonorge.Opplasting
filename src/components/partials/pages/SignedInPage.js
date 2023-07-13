// Dependencies
import React, { Fragment, useContext } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { GnButton } from "@kartverket/geonorge-web-components";

// Components
import OrganisationInfo from "../OrganisationInfo";
import DatasetList from "../DatasetList";

// Store
import AuthContext from "../../../store/AuthContext";

const SignedInPage = () => {
    const loaderData = useLoaderData();
    const { roles } = useContext(AuthContext);

    const canAddDataset = roles.includes("nd.metadata_admin");

    return (
        <Fragment>
            {canAddDataset && (
                <gn-button>
                    <Link to="/dataset/new">Nytt datasett</Link>
                </gn-button>
            )}
            <OrganisationInfo />
            <DatasetList datasetItems={loaderData?.datasetItems} />
        </Fragment>
    );
};

export default SignedInPage;
