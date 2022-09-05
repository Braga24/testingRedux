import React from 'react';

let initialState = {
  list: [
    {
      id: 1,
      name: 'hein'
    }
  ],
  apiData: []
};

 const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }
    }
    case 'FETCH_DATA': {
      return {
        ...state,
        apiData: action.payload
      }
    }
    default:
      return state;

  }
};

export default Reducer
 





