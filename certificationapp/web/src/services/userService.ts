import api from "../api/api";
import type { ApiResponse } from "../types/response.type";
import type { UserPayload, UserResponse, UsersResponse } from "../types/user.type";

export const indexUser = () => {
    return api.get<ApiResponse<UsersResponse>>('/users');
}

export const showUser = (id: number) => {
    return api.get<ApiResponse<UserResponse>>(`/users/${id}`);
}

export const storeUser = (payload: UserPayload) => {
    return api.post('/users', payload);
}

export const updateUser = (payload: UserPayload, id: number) => {
    return api.put(`/users/${id}`, payload);
}

export const destroyUser = (id: number) => {
    return api.delete(`/users/${id}`);
}