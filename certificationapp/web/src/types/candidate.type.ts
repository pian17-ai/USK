import type { SchemeState } from "./scheme.type";

export type CandidateState = {
    id: number;
    candidate_number: string;
    full_name: string;
    email: string;
    phone_number: string;
    born_date: string;
    gender: string;
    address: string;
    certification_scheme: SchemeState,
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
    email: string;
    phone_number: string;
    born_date: string;
    gender: string;
    address: string;
    certification_scheme_id: number;
}