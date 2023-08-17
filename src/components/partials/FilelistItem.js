// Dependencies
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { GnSelect } from "@kartverket/geonorge-web-components";

// Store
import AuthContext from "../../store/AuthContext";

const FilelistItem = ({ file, fileStatuses, datasetItem }) => {
    const [statusValue, setStatusValue] = useState(file.status);

    useEffect(
        () => () => {
            setStatusValue(file.status);
        },
        [file.status]
    );

    const handleSubmit = async (event) => {
        setStatusValue(event.target.value);
        event.preventDefault();
        const datasetForm = {
            status: event.target.value
        };
        //todo improve dialog?
        try {
            const response = await axios.put(
                `https://opplasting.dev.geonorge.no/api/Dataset/file/${file.id}`,
                datasetForm
            );

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

    const url = `https://opplasting.dev.geonorge.no/api/Dataset/download-file/${file.id}`;

    const { canEditDatasetStatus } = useContext(AuthContext);

    return (
        <tr>
            <td>
                <Link to={url}>{file.fileName}</Link>
            </td>
            <td>{formatDate(file.date)}</td>
            <td>
                {canEditDatasetStatus(datasetItem) ? (
                    <gn-select block="">
                        <select value={statusValue} onChange={handleSubmit}>
                            <option value={fileStatuses.Submitted}>{fileStatuses.Submitted}</option>
                            <option value={fileStatuses.InProcess}>{fileStatuses.InProcess}</option>
                            <option value={fileStatuses.Valid}>{fileStatuses.Valid}</option>
                            <option value={fileStatuses.Invalid}>{fileStatuses.Invalid}</option>
                        </select>
                    </gn-select>
                ) : (
                    statusValue
                )}
            </td>
        </tr>
    );
};

export default FilelistItem;
