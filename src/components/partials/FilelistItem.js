// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";


const FilelistItem = (props) => {

  const formatDate = (date) => {
    if (date !== null) {
        const dateArray = date.split("-");
        const day = dateArray[2].substring(0, 4).split("T");
        var timeArray = dateArray[2].split("T");
        var time = timeArray[1].substring(0, 5);
        return day[0] + "." + dateArray[1] + "." + dateArray[0] + " " + time;
    }
};
 
  const url = `https://opplasting.dev.geonorge.no/api/Dataset/download-file/${props.file.id}`
  
    return (
          <tr>
            <td><Link to={url}>{props.file.fileName}</Link></td>
            <td>{formatDate(props.file.date)}</td>
            <td>
            <gn-select block="">
            <select value={props.file.status}>
              <option value={props.fileStatuses.Submitted}>{props.fileStatuses.Submitted}</option>
              <option value={props.fileStatuses.InProcess}>{props.fileStatuses.InProcess}</option>
              <option value={props.fileStatuses.Valid}>{props.fileStatuses.Valid}</option>
              <option value={props.fileStatuses.Invalid}>{props.fileStatuses.Invalid}</option>
            </select>
            </gn-select>
            </td>
          </tr>
    );
};

export default FilelistItem;
