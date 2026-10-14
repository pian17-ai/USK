import type { SchemeState } from "./scheme.type";

export type CandidateState = {
    id: number;
    full_name: string;
    nik: number;
    email: string;
    phone_number: string;
    born_date: string;
    gender: string;
    address: string;
    user_id: number;
    certification_scheme: SchemeState | null,
    created_at: string;
    updated_at: string;
}

export type CandidatesResponse = {
    candidates : CandidateState[];
}

export type CandidateResponse = {
    candidate: CandidateState;
}

export type CandidatePayload = {
    full_name: string;
    nik: number;
    email: string;
    phone_number: string;
    born_date: string;
    gender: string;
    address: string;
    user_id : number;
    certification_scheme_id: number | null;
}

export type UpdateProfilePayload = {
    username: string;
    full_name: string;
    nik: number;
    email: string;
    phone_number: string;
    born_date: string;
    gender: string;
    address: string;
}