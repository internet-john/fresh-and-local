import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  RESET_STATE,
  SHOW_FRUIT,
  SHOW_VEG,
  SHOW_HOME_PG,
  SHOW_SEASON_PG,
  HIDE_FRUIT,
  HIDE_VEG,
  resetState,
  showHomePg,
  showSeasonPg,
  showSeasonPage,
  showFruit,
  showVeg,
  hideFruit,
  hideVeg,
  toggleProduceFilter,
  toggleFruit,
  toggleVeg,
} from '../../actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Actions', () => {
  describe('Simple actions', () => {
    it('resetState dispatched with expected type', () => {
      expect(resetState().type).toEqual(RESET_STATE);
    });

    it('showHomePg dispatched with expected type', () => {
      expect(showHomePg().type).toEqual(SHOW_HOME_PG);
    });

    it('showSeasonPage dispatched with expected type', () => {
      expect(showSeasonPage().type).toEqual(SHOW_SEASON_PG);
    });

    it('showFruit dispatched with expected type', () => {
      expect(showFruit().type).toEqual(SHOW_FRUIT);
    });

    it('showVeg dispatched with expected type', () => {
      expect(showVeg().type).toEqual(SHOW_VEG);
    });

    it('hideFruit dispatched with expected type', () => {
      expect(hideFruit().type).toEqual(HIDE_FRUIT);
    });

    it('hideVeg dispatched with expected type', () => {
      expect(hideVeg().type).toEqual(HIDE_VEG);
    });
  });

  describe('Thunks', () => {
    let expectedActions, store, dispatch, getState;

    beforeEach(() => {
      store = mockStore({ showFruit: false, showVeg: false });
      dispatch = jest.fn();
      getState = () => store;
    });

    it('showSeasonPg dispatched with expected type', () => {
      expectedActions = [showSeasonPage(), showFruit(), showVeg()];

      showSeasonPg()(dispatch, getState);

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenCalledWith(expectedActions[0]);
      expect(dispatch).toHaveBeenCalledWith(expectedActions[1]);
      expect(dispatch).toHaveBeenCalledWith(expectedActions[2]);
    });

    it('toggleProduceFilter will dispatch action to toggle fruit/vegetable filters', () => {
      toggleProduceFilter('SHOW_FRUIT', true)(dispatch, getState);

      expect(dispatch).toHaveBeenCalledTimes(1);
      // Returns anonymous function -- at least asserting that it indeed returns a function!
      expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    });

    describe('toggleFruit', () => {
      it('toggleFruit will dispatch action to show fruit', () => {
        toggleFruit(true)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(showFruit());
      });
      it('toggleFruit will dispatch action to hide fruit', () => {
        toggleFruit(false)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(hideFruit());
      });
    });

    describe('toggleVeg', () => {
      it('toggleVeg will dispatch action to show fruit', () => {
        toggleVeg(true)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(showVeg());
      });
      it('toggleVeg will dispatch action to hide fruit', () => {
        toggleVeg(false)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(hideVeg());
      });
    });
  });
});
