// Dependencies
import React from "react";

// Geonorge WebComponents
import AllowedFileformatItem from "../partials/AllowedFileformatItem";

const AllowedFileformats = (props, { handleFileFormatChange }) => {
    return (
        <gn-field-container block="">
            <p>Gyldige filformater:</p>
            {props.availableFileformats.map((fileformat) => {
                return (
                    <AllowedFileformatItem
                        key={fileformat.extension}
                        fileformat={fileformat}
                        allowedFileFormats={props.allowedFileFormats}
                        handleFileFormatChange={props.handleFileFormatChange}
                    />
                );
            })}
        </gn-field-container>
    );
};

export default AllowedFileformats;
