import { connect } from 'react-redux';

import ContentGrid from './contentGrid';

const mapStateToProps = state => {
    return {
        vegDisplayed: state.vegDisplayed,
        fruitDisplayed: state.fruitDisplayed
    }
}

const ContentGridContainer = connect(mapStateToProps)(ContentGrid);

export default ContentGridContainer;