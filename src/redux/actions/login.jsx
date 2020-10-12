export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (token, user) => ({
        type: LOGIN,
        token,
        user,
})

export const logout = () => ({type: LOGOUT});

export type userSession = login | logout;