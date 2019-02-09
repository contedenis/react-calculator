import { get } from 'lodash';

export const getOperationsSuccess = ({ operations }) => get(operations, 'operationsSuccess');