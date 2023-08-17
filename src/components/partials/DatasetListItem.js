// Dependencies
import React from "react";
import { Link } from "react-router-dom";

const DatasetListItem = (props) => {
    const url = `/dataset/${props.datasetItem.id}`;
    return (
        <tr>
            <td>
                <Link to={url}>{props.datasetItem.title}</Link>
            </td>
            <td>{props.datasetItem.ownerOrganization}</td>
            <td>{props.datasetItem.contactEmail}</td>
        </tr>
    );
};

export default DatasetListItem;
