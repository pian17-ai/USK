import { useRoutes } from "react-router-dom"
import { adminRoute } from "./adminRoute"

function AppRoutes() {
  return useRoutes(adminRoute)
}

export default AppRoutes
