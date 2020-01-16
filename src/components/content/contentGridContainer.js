import { connect } from 'react-redux';

import ContentGrid from './contentGrid';

const mapStateToProps = state => {
    return {
        showFruit: state.showFruit,
        showVeg: state.showVeg
    }
}

const ContentGridContainer = connect(mapStateToProps)(ContentGrid);

export default ContentGridContainer;