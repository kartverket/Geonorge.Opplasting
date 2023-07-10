// Utils
import { fetchAllowedFileformats, fetchDatasetItem, fetchDatasetItems } from "./apiUtils";

export async function listDatasetsLoader(role) {
    console.log("listDatasetsLoader", role);
    if (role) {
        const datasetItems = await fetchDatasetItems();
        return { datasetItems };
    } else return null;
}

export const showDatasetLoader = async ({ params }) => {
    const datasetItem = await fetchDatasetItem(params.id);
    return { datasetItem };
};

export const editDatasetLoader = async ({ params }) => {
    const datasetItem = fetchDatasetItem(params.id);
    const allowedFileformat = fetchAllowedFileformats();

    const datasetContent = await Promise.all([datasetItem, allowedFileformat]);
    let fetchItems = {};
    datasetContent.forEach((fetchItem) => {
        fetchItems = {
            ...fetchItems,
            ...fetchItem
        };
    });
    return fetchItems;
};

export const newDatasetLoader = async () => {
    return await fetchAllowedFileformats();
};
