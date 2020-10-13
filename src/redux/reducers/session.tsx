import { LOGIN, LOGOUT, userSession } from '../actions/login';

const defaultState : {
    token: string;
    name: string;
    table: number;
    history: any [];
} = {token: "", name: "", table: 0, history: []};

const session = (state = defaultState, action: userSession) => {
    switch(action.type) {
        case LOGIN:
            console.log("redux" + action);
            return { 
                ...state, 
                token: action.token, 
                user: action.user, 
                table: action.table 
            };
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
}

export default session;