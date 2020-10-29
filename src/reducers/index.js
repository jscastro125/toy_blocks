import { combineReducers } from 'redux';
import nodes from './nodes';
import blocksByNode from './blocksByNode';

const rootReducer = combineReducers({
  nodes,
  blocksByNode
});

export default rootReducer;
