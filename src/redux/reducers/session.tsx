import { LOGIN, LOGOUT, userSession } from '../actions/login';

let table: any = localStorage.getItem('table');
if (table) {
  table = JSON.parse(table);
}

const defaultState: {
  token: string | null;
  email: string | null;
  table: number | null;
  history?: any[];
} = {
  token: localStorage.getItem('token'),
  email: localStorage.getItem('email'),
  table: table ? table : 0,
  history: [],
};

const session = (state = defaultState, action: userSession) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.token);
      localStorage.setItem('email', action.email);
      localStorage.setItem('table', JSON.stringify(action.table));
      return {
        ...state,
        token: action.token,
        email: action.email,
        table: action.table,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('table');
      return { ...state, token: '', email: '', table: 0, history: [] };
    default:
      return state;
  }
};

export default session;
