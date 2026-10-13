import { useRoutes } from "react-router-dom";
import { adminRoute } from "./adminRoute";
import useAuth from "../hooks/useAuth";
import { publicRoute } from "./publicRoute";

function AppRoutes() {
  const { user } = useAuth();

  const useRoute = () => {
    
  }

  return useRoutes(user ? adminRoute : publicRoute);
}

export default AppRoutes;
