// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";


const DatasetListItem = (props) => {
    return (
          <tr>
            <td>{props.datasetItem.title}</td><td>{props.datasetItem.id}</td><td>{props.datasetItem.contactEmail}</td>
          </tr>
    );
};

export default DatasetListItem;
