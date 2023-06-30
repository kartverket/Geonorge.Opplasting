// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";


const FilelistItem = (props) => {

  const url = `/dataset/${props.datasetId}/files/${props.file.id}`
  
    return (
          <tr>
            <td><Link to={url}>{props.file.fileName}</Link></td>
            <td>{props.file.dataset}</td>
            <td>{props.file.status}</td>
          </tr>
    );
};

export default FilelistItem;
