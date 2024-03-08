import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { ContentCategory } from "./routes/ContentCategory/ContentCategory";
import { ContentDetails } from "./routes/ContentDetails/ContentDetails";
import { Home } from "./routes/Home/Home";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Login /> 
    },
    { 
        element: <PrivateRoute />,
        children: [
            { path: "/home" , element: <Home /> },
            { path: "/category/:id" , element: <ContentCategory /> },
            { path: "/movie/:id" , element: <ContentDetails /> }
        ]
    }
]);