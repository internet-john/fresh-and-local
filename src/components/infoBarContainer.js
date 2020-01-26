import { connect } from 'react-redux';

import InfoBar from './infoBar';

const mapStateToProps = state => {
    return {
        showFruit: state.showFruit,
        showVeg: state.showVeg
    }
}

const InfoBarContainer = connect(mapStateToProps)(InfoBar);

export default InfoBarContainer;