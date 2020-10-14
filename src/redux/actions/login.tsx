import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface ILogin {
  type: typeof LOGIN;
  token: string;
  email: string;
  table: number;
}

export interface ILogout {
  type: typeof LOGOUT;
}

export type userSession = ILogin | ILogout;

export interface IdataLogin {
  email: string;
  password: string;
  table: number;
}

export const requestSession = (dataLogin: IdataLogin) => (dispatch: (arg: userSession) => void) => {
  const data = { email: dataLogin.email, password: dataLogin.password };
  const url = `http://localhost:3001/`;
  const api = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
  });
  api
    .post('login', data)
    .then((res) => {
      const token = res.data;
      dispatch(login(token.accessToken, dataLogin.email, dataLogin.table));
      const axiosPath = axios.create({
        baseURL: `http://localhost:3001/`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      axiosPath.patch(`/tables/${dataLogin.table}`, { avaliable: false });
    })
    .catch((error) => console.log(error));
};

export const login = (token: string, email: string, table: number): ILogin => ({
  type: LOGIN,
  token,
  email,
  table,
});

export const logout = () => ({ type: LOGOUT });
