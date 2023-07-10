// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";

import DatasetListItem from "../partials/DatasetListItem";

const DatasetList = ({ datasetItems }) => {
    if (!datasetItems) {
        return <div>Laster inn datasett</div>;
    } else if (!datasetItems?.length) {
        return <div>Ingen datasett</div>;
    } else {
        return (
            <gn-table hoverable="">
                <table>
                    <thead>
                        <tr>
                            <th>Tittel</th>
                            <th>Eier</th>
                            <th>E-post</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datasetItems.map((datasetItem) => {
                            return <DatasetListItem key={datasetItem.id} datasetItem={datasetItem} />;
                        })}
                    </tbody>
                </table>
            </gn-table>
        );
    }
};

export default DatasetList;
