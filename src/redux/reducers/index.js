import {
  RESET_STATE,
  SHOW_FRUIT,
  SHOW_VEG,
  HIDE_FRUIT,
  HIDE_VEG,
} from '../actions';

const initialState = {
  showFruit: false,
  showVeg: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    case SHOW_FRUIT:
      return Object.assign({}, state, {
        showFruit: true,
      });
    case SHOW_VEG:
      return Object.assign({}, state, {
        showVeg: true,
      });
    case HIDE_FRUIT:
      return Object.assign({}, state, {
        showFruit: false,
      });
    case HIDE_VEG:
      return Object.assign({}, state, {
        showVeg: false,
      });
    default:
      return state;
  }
};

export default reducer;
