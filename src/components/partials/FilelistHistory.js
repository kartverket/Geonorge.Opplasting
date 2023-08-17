// Dependencies
import React from "react";
import { useState, useEffect } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { GnTable } from "@kartverket/geonorge-web-components";

// Components
import FilelistItem from "./FilelistItem";

const FilelistHistory = ({ datasetItem }) => {
    const [fileStatuses, setfileStatuses] = useState();

    useEffect(() => {
        const url = "https://opplasting.dev.geonorge.no/api/Dataset/file/statuses";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setfileStatuses(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    if (!datasetItem.files?.length) {
        return null;
    }

    return (
        fileStatuses && (
            <gn-table hoverable="">
                <table>
                    <thead>
                        <tr>
                            <th>Filnavn</th>
                            <th>Dato</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datasetItem.files.map((file) => {
                            return (
                                <FilelistItem
                                    key={file.id}
                                    file={file}
                                    datasetItem={datasetItem}
                                    fileStatuses={fileStatuses}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </gn-table>
        )
    );
};

export default FilelistHistory;
