import type { ReactNode } from "react";

export type AuthProviderProps = {
    children: ReactNode;
}

export type LoginResponse = {
    status : string;
    message : string;
    data : {
        token : string;
        user : UserState
    }
}

export type UserState = {
    id : number;
    full_name : string;
    username : string;
    created_at : string;
    updated_at : string;
}

export type AuthContextType = {
    user : UserState | null;
    login : (userData: LoginResponse, userToken: string) => void;
    logout: () => void;
}