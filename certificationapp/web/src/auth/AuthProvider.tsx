import { useState } from "react";
import type { UserState } from "../types/user.type";
import AuthContext from "./AuthContext";
import type { AuthProviderProps, LoginResponse, RegisterPayload } from "../types/auth.type";
import { logoutAPI, registerAPI } from "../services/authService";
import type { ApiResponse } from "../types/response.type";

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserState | null>(() => {
    const storedData = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedData && storedToken) {
      return JSON.parse(storedData);
    }
  });

  const register = async(payload: RegisterPayload) => {
    try {
      await registerAPI(payload);
    } catch (err) {
      console.error(err);
    }
  }

  const login = (userData: ApiResponse<LoginResponse>) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.data!.token);
    setUser(userData.data!.user);
  };

  const logout = async () => {
    await logoutAPI();

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
