import AdminLayout from "../layouts/AdminLayout";
import CandidatePage from "../pages/dashboard/CandidatePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import SchemePage from "../pages/dashboard/SchemePage";
import UserPage from "../pages/dashboard/UserPage";

export const adminRoute = [
  {
    path: "/",
    element: <AdminLayout/>,
    children: [
      {
        path: "",
        element: <DashboardPage/>,
      },
      {
        path: "candidate",
        element: <CandidatePage/>,
      },  
      {
        path: "scheme",
        element: <SchemePage/>,
      },
      {
        path: "user",
        element: <UserPage/>,
      },
    ],
  },
];
