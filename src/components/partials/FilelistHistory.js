// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, HeadingText, breadcrumbList } from "@kartverket/geonorge-web-components";


const FilelistHistory = () => {
    return (
        <content-container>
          <gn-table hoverable="">
            <table>
                <thead>
                    <tr>
                        <th>Tittel</th>
                        <th>Dato</th>
                        <th>Eier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1 Data 1</td>
                        <td>Row 1 Data 2</td>
                        <td>Row 1 Data 3</td>
                    </tr>
                    <tr>
                        <td>Row 2 Data 1</td>
                        <td>Row 2 Data 2</td>
                        <td>Row 2 Data 3</td>
                    </tr>
                </tbody>
            </table>
            </gn-table>  
        </content-container>
    );
};

export default FilelistHistory;
