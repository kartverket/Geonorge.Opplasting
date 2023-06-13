// Dependencies
import React from "react";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { ContentContainer, GnButton, HeadingText, GnSelect } from "@kartverket/geonorge-web-components";

const DatasetSelector = () => {
    return (
        <React.Fragment>
            <heading-text><h2>Dine tilgjengelige datasett</h2></heading-text>
            <gn-label block="">
                <label for="block-label-select">Velg datasett</label>
            </gn-label>
            <gn-select block="">
                <select id="block-label-select">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </gn-select>
        </React.Fragment>
    );
};

export default DatasetSelector;
