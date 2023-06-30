// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";


const DatasetListItem = (props) => {

  const url = `/dataset/${props.datasetItem.id}`
    return (
          <tr>
            <td><Link to={url}>{props.datasetItem.title}</Link></td>
            <td>{props.datasetItem.ownerOrganization}</td>
            <td>{props.datasetItem.contactEmail}</td>
          </tr>
    );
};

export default DatasetListItem;
