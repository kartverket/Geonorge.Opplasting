// Dependencies
import { createBrowserRouter } from "react-router-dom";

// Components
import Layout from "../components/layout";

// Route components
import HomeRoute from "../components/routes/HomeRoute";
import DatasetListRoute from "../components/routes/DatasetListRoute";
import DatasetDetailsRoute from "../components/routes/DatasetDetailsRoute";
import DatasetEditRoute from "../components/routes/DatasetEditRoute";
import DatasetNewRoute from "../components/routes/DatasetNewRoute";
import NotFoundRoute from "../components/routes/NotFoundRoute";

// Loaders
import { editDatasetLoader, listDatasetsLoader, newDatasetLoader, showDatasetLoader } from "./loaders";

const getRouter = (roles) => {
    return createBrowserRouter([
        {
            element: <Layout />,
            id: "root",
            children: [
                {
                    element: <HomeRoute />,
                    index: true,
                    loader: () => listDatasetsLoader(roles)
                },
                {
                    element: <DatasetNewRoute />,
                    path: "dataset/new",
                    loader: newDatasetLoader
                },
                {
                    element: <DatasetEditRoute />,
                    path: "dataset/:id/edit",
                    loader: editDatasetLoader
                },
                {
                    element: <DatasetListRoute />,
                    path: "dataset",
                    loader: () => listDatasetsLoader(roles)
                },
                {
                    element: <DatasetDetailsRoute />,
                    path: "dataset/:id",
                    loader: showDatasetLoader
                },
                {
                    element: <NotFoundRoute />,
                    path: "*"
                }
            ]
        }
    ]);
};

export default getRouter;
