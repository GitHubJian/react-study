import index from './index/reducer/index.js';
import index1 from './index1/reducer/index.js';

import { combineReducers } from 'redux';

export default combineReducers({
    index,
    index1
});
