export type SchemeState = {
    id: number | 0;
    scheme_code: string;
    scheme_name: string;
    description: string;
    candidate_count: number;
    created_at: string | null | "";
    updated_at: string | null | "";
}

export type SchemesResponse = {
    schemes: SchemeState[];
}

export type SchemeResponse = {
    scheme: SchemeState;
}

export type SchemePayload = {
    scheme_code: string;
    scheme_name: string;
    description: string;
}