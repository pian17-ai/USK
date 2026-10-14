import type { ReactNode } from "react";
import type { ApiResponse } from "./response.type";

export type AuthProviderProps = {
  children: ReactNode;
};

export type LoginResponse = {
  token: string;
  user: UserState;
};

export type RegisterResponse = {
  token: string;
  user: UserState;
};

export type UserState = {
  id: number;
  username: string;
  role: string;
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
  username: string;
  password: string;
  full_name: string;
  nik: number;
  email: string;
  phone_number: number;
  born_date: string;
  gender: string;
  address: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};
