import { createContext } from "react";
import { Navigate } from "react-router-dom";
import { HeaderLayout } from "../../components/HeaderLayout/HeaderLayout";
import { useUser } from "../../hooks/user";
import { User } from "../../types/db.types";

interface PrivateRouteContext {
    user: User;
}

export const PrivateRouteContext = createContext<PrivateRouteContext>({} as PrivateRouteContext);

export const PrivateRoute = () => {
    const [user] = useUser();
    return (
        user 
            ? 
                <PrivateRouteContext.Provider
                    value={{ user }}
                >
                    <HeaderLayout />
                </PrivateRouteContext.Provider>
            : <Navigate to="/" />
    );
};