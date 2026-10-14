import PublicLayout from "../layouts/PublicLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/public/HomePage";
import SchemePage from "../pages/public/SchemePage";
import ShowSchemePage from "../pages/public/ShowSchemePage";

export const publicRoute = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
      {
        path: "scheme",
        element: <SchemePage />,
      },
      {
        path: `scheme/:id`,
        element: <ShowSchemePage />,
      },
    ],
  },
];
