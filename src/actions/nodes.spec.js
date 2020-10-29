import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './nodes';

describe('Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  const node = {
    url: 'http://localhost:3002',
    online: false,
    name: null
  };

  // it('should create an action to start checking node status', () => {
  //   const actual = ActionCreators.checkNodeStatusStart(node);
  //   const expected = {
  //     type: ActionTypes.CHECK_NODE_STATUS_START,
  //     node
  //   };
  //
  //   expect(actual).toEqual(expected);
  // });

  it('should create an action to save fuel savings', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.CHECK_NODE_STATUS_START,
      node
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.checkNodeStatus(node))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.checkNodeStatus(node)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to save blocks', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.SET_LOADING_NODE_BLOCKS,
      nodeUrl: node.url
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.checkNodeBlocks(node.url))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.checkNodeBlocks(node.url)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

});
