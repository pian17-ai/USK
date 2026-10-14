import { useRoutes } from "react-router-dom";
import { adminRoute } from "./adminRoute";
import useAuth from "../hooks/useAuth";
import { publicRoute } from "./publicRoute";
import { userRoute } from "./userRoute";

function AppRoutes() {
  const { user } = useAuth();

  return useRoutes(user ? user?.role == "admin" ? adminRoute : userRoute : publicRoute);
}

export default AppRoutes;
