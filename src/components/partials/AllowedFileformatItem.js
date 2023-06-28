// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { gnCheckox } from "@kartverket/geonorge-web-components";


const AllowedFileformatItem = (props,  {handleFileFormatChange }) => {
    //console.log(childToParent);
    return (        
       <Fragment>       
               <gn-label block=""><label htmlFor={props.fileformat.extension}><input id={props.fileformat.extension} name="allowedformats" type="checkbox" value={props.fileformat.extension} onClick={(e) => props.handleFileFormatChange(e)} /> {props.fileformat.name} (.{props.fileformat.extension})</label></gn-label>
               <gn-input></gn-input>
        </Fragment>
    );
};

export default AllowedFileformatItem;
