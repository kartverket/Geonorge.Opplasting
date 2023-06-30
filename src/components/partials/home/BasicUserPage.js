// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import FilelistHistory from "../FilelistHistory";

const BasicUserPage = (props) => {

    const breadcrumbs = [
        {
            "name": "Forside",
            "url": "/"
        },
        {
            "name": "Innlogget bruker",
            "url": `/`
        }
    
    ]
    return (
        
            <Fragment>
                <breadcrumb-list id="breadcrumb-list" breadcrumbs={JSON.stringify(breadcrumbs)}></breadcrumb-list>
                <heading-text>
                    <h1 underline="true">Side for opplasting av filer til datasett</h1>
                    <p>Logg over tidligere opplastede filer</p>
                </heading-text>
                <body-text>
                   
                  <FilelistHistory />
                   
                </body-text>
            </Fragment>
       
    );
};

export default BasicUserPage;
