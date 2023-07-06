// Dependencies
import React from "react";
import axios from 'axios';
// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const FilelistItem = (props) => {

  const [statusValue, setStatusValue] = useState(props.file.status);

  useEffect(() => () => {
    setStatusValue(props.file.status);
  }, [props.file.status]);

  const handleSubmit = async (event) => {
    setStatusValue(event.target.value)
    event.preventDefault();
    const datasetForm = {
      status : event.target.value
    };
    //todo improve dialog?
    try {
       const response = await axios.put(`https://opplasting.dev.geonorge.no/api/Dataset/file/${props.file.id}`, datasetForm);

       if (response.data) {
          //alert("Lagret"); 
       }
    } catch (error) {
      alert("Feilet" + error);

       if (error.response?.data) {
        alert("Feilet" + error.response?.data);
       } else {
        alert("Feilet" + error.message);
       }                
    }
 };

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
            <select value={statusValue}  onChange={handleSubmit}>
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
