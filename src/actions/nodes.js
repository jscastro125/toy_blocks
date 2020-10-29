import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const checkNodeStatusStart = (node) => {
  return {
    type: types.CHECK_NODE_STATUS_START,
    node
  };
};

const checkNodeStatusSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_STATUS_SUCCESS,
    node,
    res
  };
};

const checkNodeStatusFailure = node => {
  return {
    type: types.CHECK_NODE_STATUS_FAILURE,
    node,
  };
};

export function checkNodeBlocks(nodeUrl) {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.SET_LOADING_NODE_BLOCKS,
        nodeUrl
      });
      const res = await fetch(`${nodeUrl}/api/v1/blocks`);

      if(res.status >= 400) {
        dispatch({
          type: types.SET_ERROR_NODE_BLOCKS,
          nodeUrl
        });
      }

      const json = await res.json();
      dispatch({
        type: types.SET_NODE_BLOCKS,
        nodeUrl,
        res: json,
      });
    } catch (err) {
      dispatch({
        type: types.SET_ERROR_NODE_BLOCKS,
        nodeUrl
      });
    }
  };
}

export function checkNodeStatus(node) {
  return async (dispatch) => {
    try {
      dispatch(checkNodeStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/status`);

      if(res.status >= 400) {
        dispatch(checkNodeStatusFailure(node));
      }

      const json = await res.json();

      dispatch(checkNodeStatusSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeStatusFailure(node));
    }
  };
}

export function checkNodeStatuses(list) {
  return (dispatch) => {
    list.forEach(node => {
      dispatch(checkNodeStatus(node));
    });
  };
}
