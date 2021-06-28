import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from '../actions/types';

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        items: action.payload
      };
      case ADD_COMMENT:
        action.payload.id=action.payload.id + Math.floor(Math.random() * 99999);
        let newItems=[...state.items, action.payload];
        state.items.map(item => {
          if(item.email===action.payload.email) newItems=[...state.items];
          return null;
        });
        return {
          ...state,
          items: newItems
        }
      case REMOVE_COMMENT:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        }
    default:
      return state;
  }
}
