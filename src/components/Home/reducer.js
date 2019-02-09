import {
  CLEAR_OPERATIONS_HISTORY,
  DELETE_OPERATION,
  POST_NEW_OPERATION,
} from './actionTypes';

const defaultState = {
  operationsSuccess: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case POST_NEW_OPERATION:
      return {
        ...state,
        operationsSuccess: payload,
      };
    case CLEAR_OPERATIONS_HISTORY:
      return {
        ...state,
        operationsSuccess: [],
      };
    case DELETE_OPERATION:
    const { operationsSuccess } = state;
    const { index: index1 } = payload;
    const result = operationsSuccess
      .map((value, index) => index !== index1 && value)
      .filter(value => value);

      return {
        ...state,
        operationsSuccess: result,
      }
    default:
      return state;
  }
};
  