import type { ReactNode } from "react";
import type { ApiResponse } from "./response.type";

export type AuthProviderProps = {
  children: ReactNode;
};

export type LoginResponse = {
  token: string;
  user: UserState;
};

export type RegisterResponse = {};

export type UserState = {
  id: number;
  full_name: string;
  username: string;
  created_at: string;
  updated_at: string;
};

export type AuthContextType = {
  user: UserState | null;
  register: (payload: RegisterPayload) => void;
  login: (userData: ApiResponse<LoginResponse>) => void;
  logout: () => void;
};

export type RegisterPayload = {
  full_name: string;
  username: string;
  password: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};
