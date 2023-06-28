// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { gnCheckox } from "@kartverket/geonorge-web-components";


const AllowedFileformatItem = (props,  {handleFileFormatChange }) => {
    //console.log(props.datasetAllowedFileFormats);

    const isChecked = (format, formatSelected) => {
        if (formatSelected !== undefined && formatSelected.length > 0 && format === formatSelected[0].extension) {
           return true;
        }

        return false;
    }

    return (        
       <Fragment>       
               <gn-label block=""><label htmlFor={props.fileformat.extension}><input id={props.fileformat.extension} name="allowedformats" type="checkbox" defaultChecked={isChecked(props.fileformat.extension, props.datasetAllowedFileFormats)} value={props.fileformat.extension} onClick={(e) => props.handleFileFormatChange(e)} /> {props.fileformat.name} (.{props.fileformat.extension})</label></gn-label>
               <gn-input></gn-input>
        </Fragment>
    );
};

export default AllowedFileformatItem;
