const initialState = {
  showFruit: true,
  showVeg: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_FRUIT':
            return Object.assign({}, state, {
                showFruit: !state.showFruit
            })
        case 'TOGGLE_SHOW_VEG':
            return Object.assign({}, state, {
                showVeg: !state.showVeg
            })
        default:
            return state;
    }
}

export default reducer;