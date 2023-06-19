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
              path: "userpage"
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
    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
