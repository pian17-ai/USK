import api from "../api/api"
import type { ApiResponse } from "../types/response.type";
import type { SchemePayload, SchemeResponse, SchemesResponse, SchemeState } from "../types/scheme.type";

export const indexScheme = () => {
    return api.get<ApiResponse<SchemesResponse>>('/schemes');
}

export const showScheme = (id: number | string) => {
    return api.get<ApiResponse<SchemeResponse>>(`/schemes/${id}`)
}

export const storeScheme = (payload: SchemePayload) => {
    return api.post<ApiResponse<SchemeState>>('/schemes', payload)
}

export const updateScheme = (payload: SchemePayload, id: number) => {
    return api.put(`/schemes/${id}`, payload)
}

export const destroyScheme = (id: number) => {
    return api.delete(`/schemes/${id}`)
}