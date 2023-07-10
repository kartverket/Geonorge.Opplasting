import { createContext, useState } from "react";

const AuthContext = createContext({
    role: null
});

export function AuthContextProvider(props) {
    const [activeRole, setActiveRole] = useState();

    function setRole(role) {
        setActiveRole(role);
    }

    const context = {
        role: activeRole,
        setRole
    };

    return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
