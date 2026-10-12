import api from "../api/api"
import type { CandidatePayload, CandidateResponse, CandidatesResponse } from "../types/candidate.type";
import type { ApiResponse } from "../types/response.type";

export const indexCandidate = () => {
    return api.get<ApiResponse<CandidatesResponse>>('/candidates');
}

export const showCandidate = (id: number | string) => {
    return api.get<ApiResponse<CandidateResponse>>(`/candidates/${id}`);
}

export const storeCandidate = (payload: CandidatePayload) => {
    return api.post('/candidates', payload);
}

export const updateCandidate = (payload: CandidatePayload, id: number) => {
    return api.put(`/candidates/${id}`, payload);
}

export const destroyCandidate = (id: number | string) => {
    return api.delete(`/candidates/${id}`)
}