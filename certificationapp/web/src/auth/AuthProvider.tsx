import { useState } from "react";
import { type AuthProviderProps, type LoginResponse, type UserState } from "../types/auth.type";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserState | null>(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        if (storedToken && storedUser) {
            return JSON.parse(storedUser)
        }
    });

    const login = (userData: LoginResponse, userToken: string) => {
        const dataUser = JSON.stringify(userData.data.user);
        localStorage.setItem("token", userToken);
        localStorage.setItem("user", dataUser);
        setUser(userData.data.user);
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}