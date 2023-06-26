// Dependencies
import React, { Fragment } from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { gnCheckox } from "@kartverket/geonorge-web-components";


const AllowedFileformatItem = (props) => {
    
    return (        
       <Fragment>       
               <gn-label block=""><label for={props.fileformat.name}><input id={props.fileformat} type="checkbox" value={props.fileformat.extension} onclick={props.handleOnclick} /> {props.fileformat.name} & .{props.fileformat.extension}</label></gn-label>
               <gn-input></gn-input>
        </Fragment>
    );
};

export default AllowedFileformatItem;
