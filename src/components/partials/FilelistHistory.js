// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";
import FilelistItem from "./FilelistItem";


const FilelistHistory = ({datasetItem}) => {

    if (!datasetItem.files?.length) {
        return null;
    }

    return (
        <Fragment>
        
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
                {datasetItem.files.map(file =>     {                
                    return <FilelistItem key={file.id} file={file} datasetId={datasetItem.id} />
                   })} 
                  
                </tbody>
            </table>
            </gn-table>  
            </Fragment>
    );
};

export default FilelistHistory;
