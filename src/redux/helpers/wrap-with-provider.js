import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers/appReducer';

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore(reducer);
  return <Provider store={store}>{element}</Provider>;
};
