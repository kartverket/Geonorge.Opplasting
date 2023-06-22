// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText } from "@kartverket/geonorge-web-components";
import FilelistHistory from "../FilelistHistory";

const BasicUserPage = (props) => {


    return (
        <Fragment>
            <breadcrumb-list id="breadcrumb-list" breadcrumbs="[{&quot;name&quot;:&quot;Forsiden&quot;,&quot;url&quot;:&quot;/&quot;},{&quot;name&quot;:&quot;username?&quot;,&quot;url&quot;:&quot;/datasetOwn&quot;}]"></breadcrumb-list>
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
