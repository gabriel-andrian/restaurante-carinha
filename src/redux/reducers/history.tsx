import { ADD_FINISHED_ORDER, CLEAN_HISTORY, actionType } from '../actions/history';

let defaultState: any[] = [];

const previousHistory = localStorage.getItem('history');
if (previousHistory) defaultState = JSON.parse(previousHistory);

const history = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case ADD_FINISHED_ORDER:
      const newState = [...state, ...action.newFinishedOrder];
      localStorage.setItem('history', JSON.stringify(newState));
      return newState;
    case CLEAN_HISTORY:
      localStorage.removeItem('history');
      return defaultState;
    default:
      return state;
  }
};

export default history;
