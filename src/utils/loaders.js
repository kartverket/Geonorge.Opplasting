// Utils
import { fetchAvailableFileformats, fetchDatasetItem, fetchDatasetItems } from "./apiUtils";

export async function listDatasetsLoader(roles) {
    const acceptedRoles = ["nd.metadata_admin", "nd.gjenbruk"];
    const canLoadDatasets = roles?.some((role) => acceptedRoles.includes(role));
    if (canLoadDatasets) {
        const datasetItems = await fetchDatasetItems();
        return { datasetItems };
    } else return null;
}

export async function showDatasetLoader({ params }) {
    const datasetItem = await fetchDatasetItem(params.id);
    return { datasetItem };
}

export async function editDatasetLoader({ params }) {
    const datasetItem = fetchDatasetItem(params.id);
    const availableFileformat = fetchAvailableFileformats();
    const datasetContent = await Promise.all([datasetItem, availableFileformat]);
    let fetchItems = {};
    datasetContent.forEach((fetchItem) => {
        if (!!fetchItem.availableFileformats) {
            fetchItems.availableFileformats = fetchItem.availableFileformats;
        }
        if (!!fetchItem.metadataUuid) {
            fetchItems.datasetItem = fetchItem;
        }
    });
    return fetchItems;
}

export async function newDatasetLoader() {
    return await fetchAvailableFileformats();
}
