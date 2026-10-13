export type UserState = {
    id: number;
    username: string;
    role: string;
    created_at: string;
    updated_at: string;
}

export type UsersResponse = {
    users: UserState[];
}

export type UserResponse = {
    user: UserState;
}

export type UserPayload = {
    username: string;
    role: string;
    password: string;
}