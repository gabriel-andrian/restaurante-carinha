import { LOGIN, LOGOUT, userSession } from '../actions/login';

const defaultState: {
  token: string;
  email: string;
  table: number;
  history?: any[];
} = { token: '', email: '', table: 0, history: [] };

const session = (state = defaultState, action: userSession) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
        email: action.email,
        table: action.table,
      };
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default session;
