import { createBrowserRouter } from "react-router-dom";

// Route components
import Layout from "../components/layout";
import Dataset from "../components/routes/dataset";
import DatasetDetails from "../components/routes/datasetDetails";
import EditDataset from "../components/routes/editDataset";
import Home from "../components/routes/home";
import Newdataset from "../components/routes/newDataset";
import UserPage from "../components/routes/userPage";

// Loaders
import { editDatasetLoader, listDatasetsLoader, newDatasetLoader, showDatasetLoader } from "./loaders";
import NotFound from "../components/routes/notFound";


const getRouter = (role) => {
    console.log("role in router", role)
    return createBrowserRouter([
        {
            element: <Layout />,
            id: "root",
            children: [
                {
                    element: <Home />,
                    index: true,
                    loader: () => listDatasetsLoader(role)
                },
                {
                    element: <Newdataset />,
                    path: "dataset/new",
                    loader: newDatasetLoader
                },
                {
                    element: <EditDataset />,
                    path: "dataset/:id/edit",
                    loader: editDatasetLoader
                },
                {
                    element: <Dataset />,
                    path: "dataset",
                },
                {
                    element: <DatasetDetails />,
                    path: "dataset/:id",
                    loader: showDatasetLoader
                },

                {
                    element: <NotFound />,
                    path: "*"
                }
            ]
        }
    ]);
};

export default getRouter;
