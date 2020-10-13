export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface ILogin {
        type: typeof LOGIN;
        token:  string,
        user: string,
        table: number
}

export interface ILogout {
        type: typeof LOGOUT;
}

export type userSession = ILogin | ILogout;

export const login = (token: number, user: string, table: number) => ({
        type: typeof LOGIN,
        token,
        user,
        table,
})

export const logout = () => ({type: LOGOUT});