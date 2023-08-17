// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { GnLabel } from "@kartverket/geonorge-web-components";

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
        <Fragment>
            <gn-label block="">
                <label htmlFor={props.fileformat.extension}>
                    <input
                        id={props.fileformat.extension}
                        name="allowedformats"
                        type="checkbox"
                        defaultChecked={isChecked(props.fileformat.extension, props.allowedFileFormats)}
                        value={props.fileformat.extension}
                        onClick={(e) => props.handleFileFormatChange(e)}
                    />{" "}
                    {props.fileformat.name} (.{props.fileformat.extension})
                </label>
            </gn-label>
        </Fragment>
    );
};

export default AllowedFileformatItem;
