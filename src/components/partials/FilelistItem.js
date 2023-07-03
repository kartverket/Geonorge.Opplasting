// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";


const FilelistItem = (props) => {

  const url = `https://opplasting.dev.geonorge.no/api/Dataset/download-file/${props.file.id}`
  
    return (
          <tr>
            <td><Link to={url}>{props.file.fileName}</Link></td>
            <td>{props.file.date}</td>
            <td>{props.file.status}</td>
          </tr>
    );
};

export default FilelistItem;
