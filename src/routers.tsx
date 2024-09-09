import { Login } from "./routes/Login.tsx";
import { Admin } from "./routes/Admin.tsx";
import { Client } from "./routes/Client.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/Homepages/index.tsx";
import { App } from "./index.tsx";
import { Erropage } from "./routes/erropage.tsx";
import { StepNavegations } from "./components/inscricoespages/index.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Erropage/>,
    children: [
    {
    path: "/",
    element: <HomePage />,
  },
{
    path: "/inscricao",
    element: <StepNavegations />,
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: (
      <PrivateRoute role="admin">
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: "client",
    element: (
      <PrivateRoute role="client">
        <Client />
      </PrivateRoute>
    ),
  },
    ]
              },
    
]);
