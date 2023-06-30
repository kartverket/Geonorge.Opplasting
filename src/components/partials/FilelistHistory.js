// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";
import FilelistItem from "./FilelistItem";


const FilelistHistory = ({datasetItem}) => {

    if (!datasetItem.files?.length) {
        return null;
    }

    return (
        
          <gn-table hoverable="">
            <table>
                <thead>
                    <tr>
                        <th>Tittel</th>
                        <th>Dataset</th>
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
    );
};

export default FilelistHistory;
