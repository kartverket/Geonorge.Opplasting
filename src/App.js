import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

 import NotFound from "./components/routes/notFound";

 import Admin from "./components/routes/admin";
 import Home from "./components/routes/home";
 import DatasetOwner from "./components/routes/datasetOwner";
 import UserPage from "./components/routes/userPage";
 import Newdataset from "./components/routes/newDataset";
 import Layout from "./components/layout"

 import style from "./App.module.scss";

 // eslint-disable-next-line no-unused-vars
import { ContentContainer} from "@kartverket/geonorge-web-components";


function App() {
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
              path: "datasetowner"
          },
            {
              element: <Newdataset />,
              path: "admin/newdataset"
            },
            {
              element: <UserPage />,
              path: "userpage",
              loader: () => {
               const dummydata = [
                  {
                  id: 1,
                  title: "string",
                  metadataUuid: "string",
                  contactEmail: "string",
                  contactName: "string",
                  ownerOrganization: "string",
                  requiredRole: "string",
                  files: [
                  {
                  id: 1,
                  fileName: "IMG_8248.jpeg",
                  status: null,
                  dataset: null
                  },
                  {
                  id: 2,
                  fileName: "competitive audit.pdf",
                  status: null,
                  dataset: null
                  }
                  ]
                  },
                  {
                  id: 2,
                  title: "Kulturminner",
                  metadataUuid: "261a2a6a-bcae-43bd-b7c3-cde40b22ee11",
                  contactEmail: "epost@epost.no",
                  contactName: "Helge Nordmann",
                  ownerOrganization: "Riksantikvaren",
                  requiredRole: "nd.gjenbruk_gravplass"
                  }
                  ] 
                  return {dummydata:dummydata}
              }
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
