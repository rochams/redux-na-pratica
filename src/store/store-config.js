import { combineReducers, legacy_createStore as createStore} from 'redux';
import { handleTeam1, handleTeam2 } from './reducers/match-stats';

const reducers = combineReducers({

    time1: handleTeam1,
    time2: handleTeam2

})

const storeConfig = function () {
    return createStore(reducers)
}

export default storeConfig;
