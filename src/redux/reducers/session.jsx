import { LOGIN, LOGOUT, userSession } from '../actions/login';

const defaultState = {
    token: "",
    user: {},
};

const session = (state = defaultState, action = userSession) => {
    switch(action) {
        case LOGIN:
            return { ...state, token: action.token, user: action.user };
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
}

export default session;