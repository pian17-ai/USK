import { useContext } from "react";
import AuthContext from "../auth/AuthContext";

export default function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("use Auth must be used within AuthProvider")
    }

    return context
}