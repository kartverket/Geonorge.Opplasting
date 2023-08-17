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

    function canAddDataset() {
        return !!authRoles.includes("nd.metadata_admin");
    }

    function canEditDataset(datasettItem) {
        if (!!authRoles?.length && authRoles.includes("nd.metadata_admin")) {
            return true;
        } else if (
            !!authRoles?.length &&
            authRoles.includes("nd.gjenbruk") &&
            authOrganizationName === datasettItem.ownerOrganization
        ) {
            return true;
        } else {
            return false;
        }
    }

    function canUploadDatasetFile(datasettItem) {
        if (!!authRoles?.length && authRoles.includes("nd.metadata_admin")) {
            return true;
        } else if (
            !!authRoles?.length &&
            authRoles.includes("nd.gjenbruk") &&
            authRoles.includes(datasettItem.requiredRole)
        ) {
            return true;
        } else {
            return false;
        }
    }

    function canEditDatasetStatus(datasettItem) {
        if (!!authRoles?.length && authRoles.includes("nd.metadata_admin")) {
            return true;
        } else if (
            !!authRoles?.length &&
            authRoles.includes("nd.gjenbruk") &&
            authOrganizationName === datasettItem.ownerOrganization
        ) {
            return true;
        } else {
            return false;
        }
    }

    const context = {
        roles: authRoles,
        organizationName: authOrganizationName,
        setRoles,
        setOrganizationName,
        canAddDataset,
        canEditDataset,
        canUploadDatasetFile,
        canEditDatasetStatus
    };

    return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
