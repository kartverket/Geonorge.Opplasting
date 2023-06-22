// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";

import DatasetListItem from "../partials/DatasetListItem"




const DatasetList = (props) => {
    return (
          <gn-table hoverable="">
            <table>
                <thead>
                    <tr>
                        <th>Tittel</th>
                        <th>Dato</th>
                        <th>Eier</th>
                    </tr>
                </thead>
                <tbody>
                   {props.datasetItems.map(datasetItem => {
                    return <DatasetListItem datasetItem={datasetItem} />
                   })}
                </tbody>
            </table>
            </gn-table>  
    );
};

export default DatasetList;
