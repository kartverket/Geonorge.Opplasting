import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { ContentContainer } from "@kartverket/geonorge-web-components";

// Utils
import getRouter from "./utils/router";

// Stylesheets
import style from "./App.module.scss";
import AuthContext, { AuthContextProvider } from "./store/AuthContext";
import AccessRoles from "./components/partials/AccessRoles";

function Router() {
    const { roles } = useContext(AuthContext);
    return (
        <div className={style.app}>
            <content-container>
                <RouterProvider router={getRouter(roles)} />
            </content-container>
        </div>
    );
}

function App() {
    return (
        <AuthContextProvider>
            <AccessRoles />
            <Router />
        </AuthContextProvider>
    );
}

export default App;
