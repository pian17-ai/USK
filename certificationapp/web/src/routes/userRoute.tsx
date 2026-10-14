import UserLayout from "../layouts/UserLayout";
import HomePage from "../pages/public/HomePage";
import ProfilePage from "../pages/user/ProfilePage";
import SchemePage from "../pages/user/SchemePage";
import ShowSchemePage from "../pages/user/ShowSchemePage";

export const userRoute = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "scheme",
        element: <SchemePage />,
      },
      {
        path: `scheme/:id`,
        element: <ShowSchemePage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
];
