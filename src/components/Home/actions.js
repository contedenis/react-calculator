import {
    CLEAR_OPERATIONS_HISTORY,
    DELETE_OPERATION,
    POST_NEW_OPERATION,
  } from './actionTypes';
  
  function postNewOperation(payload) {
    return {
      type: POST_NEW_OPERATION,
      payload,
    };
  }

  function clearOperationHistory() {
    return {
      type: CLEAR_OPERATIONS_HISTORY,
    };
  }

  function deleteOperation(payload) {
    return {
      type: DELETE_OPERATION,
      payload,
    }
  }
    
  export {
    clearOperationHistory,
    deleteOperation,
    postNewOperation,
  };
  