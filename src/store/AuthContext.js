import { createContext, useState } from "react";

const AuthContext = createContext({
    role: null
});

export function AuthContextProvider(props) {
    const [authRoles, setAuthRoles] = useState();
    const [authOrganizationName, setAuthOrganizationName] = useState();

    function setRoles(roles) {
        setAuthRoles(roles);
    }

    function setOrganizationName(organizationName) {
        setAuthOrganizationName(organizationName);
    }

    const context = {
        roles: authRoles,
        organizationName: authOrganizationName,
        setRoles,
        setOrganizationName
    };

    return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
