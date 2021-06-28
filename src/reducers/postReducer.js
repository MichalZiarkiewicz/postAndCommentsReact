import { FETCH_POSTS, TOGGLE_COMMENT } from '../actions/types';

const initialState = {
  items: [],
  toggledItems: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
      case TOGGLE_COMMENT:
        if(state.toggledItems.indexOf(action.payload) === -1) {
          return {
            ...state,
            toggledItems: [...state.toggledItems, action.payload]
          };
        }
        else{
          return {
            ...state,
            toggledItems: state.toggledItems.filter(item => item !== action.payload)
          };
        }
    default:
      return state;
  }
}