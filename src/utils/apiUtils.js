export async function fetchDatasetItems() {
    return fetch("https://opplasting.dev.geonorge.no/api/Dataset")
        .then((response) => {
            console.log({ response });
            return response.json();
        })
        .then((datasetItems) => {
            return datasetItems;
        });
}

export async function fetchDatasetItem(id) {
    return fetch(`https://opplasting.dev.geonorge.no/api/Dataset/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((datasetItem) => {
            return datasetItem;
        });
}

export async function fetchAvailableFileformats() {
    return fetch("https://opplasting.dev.geonorge.no/api/Dataset/fileformats")
        .then((response) => {
            return response.json();
        })
        .then((availableFileformats) => {
            return { availableFileformats };
        });
}
