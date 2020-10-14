import { ADD_FINISHED_ORDER, CLEAN_HISTORY, actionType } from '../actions/history';

const defaultState: any[] = [];

const history = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case ADD_FINISHED_ORDER:
      debugger;
      return [...state, ...[action.newFinishedOrder]];
    case CLEAN_HISTORY:
      return defaultState;
    default:
      return state;
  }
};

export default history;
