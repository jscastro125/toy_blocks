export default () => ({
  nodes: {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false
      },
      {
        url: 'https://calm-anchorage-82141.herokuapp.com',
        online: false,
        name: 'Node 3',
        loading: false
      },
      {
        url: 'http://localhost:3002',
        online: false,
        name: 'Node 4',
        loading: false
      }
    ]
  },
  blocksByNode: {
    'https://thawing-springs-53971.herokuapp.com': {
      error: false,
      loading: false,
      blocks: []
    },
    'https://secret-lowlands-62331.herokuapp.com': {
      error: false,
      loading: false,
      blocks: []
    },
    'https://calm-anchorage-82141.herokuapp.com': {
      error: false,
      loading: false,
      blocks: []
    },
   'http://localhost:3002': {
      error: false,
      loading: false,
      blocks: []
    },
  }
});
