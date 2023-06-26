import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./components/routes/notFound";

import Admin from "./components/routes/admin";
import Home from "./components/routes/home";
import DatasetOwner from "./components/routes/datasetOwner";
import Dataset from "./components/routes/dataset";
import DatasetDetails from "./components/routes/datasetDetails";
import EditDataset from "./components/routes/editDataset";
import UserPage from "./components/routes/userPage";
import Newdataset from "./components/routes/newDataset";
import Layout from "./components/layout"

import style from "./App.module.scss";

// eslint-disable-next-line no-unused-vars
import { ContentContainer } from "@kartverket/geonorge-web-components";
import { all } from 'axios';


function App() {

  const fetchDatasetItems = () => fetch(
    "https://opplasting.dev.geonorge.no/api/Dataset").then(response => {
      return response.json()
    }).then((datasetItems) => {
      return { datasetItems };
    });

  const editDatasetLoader = async ({ params }) => {

    const datasetItem = fetchDatasetItem({ params });
    const allowedFileformat = fetchAllowedFileformats();

    const datasetContent = await Promise.all([datasetItem, allowedFileformat]);
    let fetchItems = {}
    datasetContent.forEach(fetchItem => {
      fetchItems = {
        ...fetchItems, ...fetchItem
      }
    });
    console.log({ fetchItems })
    return fetchItems
  };

  const newDatasetLoader = async () => {
    return await fetchAllowedFileformats();
  }

  const fetchDatasetItem = ({ params }) => fetch(
    `https://opplasting.dev.geonorge.no/api/Dataset/${params.id}`).then(response => {
      return response.json()
    }).then((datasetItem) => {
      return { datasetItem };
    });

  const fetchAllowedFileformats = () => fetch(
    "https://opplasting.dev.geonorge.no/api/Dataset/fileformats").then(response => {
      return response.json()
    }).then((allowedFileformats) => {
      return { allowedFileformats };
    });



  const router = createBrowserRouter([
    {
      element: <Layout />,
      id: "root",
      children: [
        {
          element: <Home />,
          index: true
        },
        {
          element: <Admin />,
          path: "admin"
        },
        {
          element: <DatasetOwner />,
          path: "datasetowner",
          loader: fetchDatasetItems
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
          element: <UserPage />,
          path: "userpage"
        },
        {
          element: <Dataset />,
          path: "dataset",
          loader: fetchDatasetItems
        },
        {
          element: <DatasetDetails />,
          path: "dataset/:id",
          loader: fetchDatasetItem
        },

        {
          element: <NotFound />,
          path: "*"
        }
      ]
    }

  ]);

  return (
    <div className={style.app}>
      <content-container>
        <RouterProvider router={router} />
      </content-container>
    </div>
  );
}

export default App;
