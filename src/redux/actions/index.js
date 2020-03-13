const RESET_STATE = 'RESET_STATE';
const SHOW_FRUIT = 'SHOW_FRUIT';
const SHOW_VEG = 'SHOW_VEG';
const SHOW_HOME_PG = 'SHOW_HOME_PG';
const SHOW_SEASON_PG = 'SHOW_SEASON_PG';
const HIDE_FRUIT = 'HIDE_FRUIT';
const HIDE_VEG = 'HIDE_VEG';

const resetState = () => ({
  type: RESET_STATE,
});

const showSeasonPg = () => {
  return dispatch => {
    dispatch(showSeasonPage());
    dispatch(showFruit());
    dispatch(showVeg());
  };
};

const toggleProduceFilter = (toggle, isShown) => {
  return dispatch => {
    toggle === 'SHOW_FRUIT'
      ? dispatch(toggleFruit(isShown))
      : dispatch(toggleVeg(isShown));
  };
};

const toggleFruit = isShown => {
  return dispatch => {
    isShown ? dispatch(showFruit()) : dispatch(hideFruit());
  };
};

const toggleVeg = isShown => {
  return dispatch => {
    isShown ? dispatch(showVeg()) : dispatch(hideVeg());
  };
};

const showHomePg = () => ({
  type: SHOW_HOME_PG,
});

const showSeasonPage = () => ({
  type: SHOW_SEASON_PG,
});

const showFruit = () => ({
  type: SHOW_FRUIT,
});

const showVeg = () => ({
  type: SHOW_VEG,
});

const hideFruit = () => ({
  type: HIDE_FRUIT,
});

const hideVeg = () => ({
  type: HIDE_VEG,
});

export {
  RESET_STATE,
  SHOW_FRUIT,
  SHOW_VEG,
  HIDE_FRUIT,
  HIDE_VEG,
  resetState,
  showHomePg,
  showSeasonPg,
  toggleProduceFilter,
};
