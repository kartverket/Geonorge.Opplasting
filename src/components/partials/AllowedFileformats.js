// Dependencies
import React from "react";

// Geonorge WebComponents
import AllowedFileformatItem from "../partials/AllowedFileformatItem"


const AllowedFileformats = (props, { handleFileFormatChange }) => {
    //console.log(props);
    return (
        <gn-field-container block=""><p>Gyldige filformater:</p>        
            {props.allowedFileformats.map(fileformat => {                
                    return <AllowedFileformatItem key={fileformat.extension} fileformat={fileformat} datasetAllowedFileFormats={props.datasetAllowedFileFormats} handleFileFormatChange={props.handleFileFormatChange} />
                   })}
        </gn-field-container>
    );
};

export default AllowedFileformats;
