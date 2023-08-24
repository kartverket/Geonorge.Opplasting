// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { GnFieldContainer, GnInput, GnLabel } from "@kartverket/geonorge-web-components";

const AllowedFileformatItem = (props, { handleFileFormatChange }) => {
    const isChecked = (format, formatSelected) => {
        if (formatSelected !== undefined && formatSelected.length > 0) {
            for (var i = 0; i < formatSelected.length; i++) {
                if (formatSelected[i].extension === format) return true;
            }
        }

        return false;
    };

    return (
        <gn-field-container block>
            <gn-input>
                <input
                    id={props.fileformat.extension}
                    name="allowedformats"
                    type="checkbox"
                    defaultChecked={isChecked(props.fileformat.extension, props.allowedFileFormats)}
                    value={props.fileformat.extension}
                    onClick={(e) => props.handleFileFormatChange(e)}
                />
            </gn-input>
            <gn-label>
                <label htmlFor={props.fileformat.extension}>
                    {props.fileformat.name} (.{props.fileformat.extension})
                </label>
            </gn-label>
        </gn-field-container>
    );
};

export default AllowedFileformatItem;
