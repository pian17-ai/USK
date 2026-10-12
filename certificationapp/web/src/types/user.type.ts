export type UserState = {
    id: number;
    full_name: string;
    username: string;
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
    full_name: string;
    username: string;
    password: string;
}