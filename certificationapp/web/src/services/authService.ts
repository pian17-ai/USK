import api from "../api/api";
import type { LoginPayload, LoginResponse, RegisterPayload } from "../types/auth.type"
import type { ApiResponse } from "../types/response.type";

export const registerAPI = (payload: RegisterPayload) => {
    return api.post<ApiResponse>('/auth/register', payload);
}

export const loginAPI = (payload: LoginPayload) => {
    return api.post<ApiResponse<LoginResponse>>('/auth/login', payload)
}

export const logoutAPI = () => {
    return api.post('/auth/logout');
}