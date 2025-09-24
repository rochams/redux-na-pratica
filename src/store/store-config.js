import { combineReducers, legacy_createStore as createStore} from 'redux';

const reducers = combineReducers({

    time1: function (state, action) {

        switch(action.type) {
            case 'ADD_GOAL':
                if (action.payload === 1) {
                    return {
                        ...state,
                        gols: state.gols += 1,
                    };
                }
                break;
            default:
                return {
                    gols: 3,
                    escanteios: 0,
                    cartoesAmarelos: 0,
                    cartoesVermelhos: 0,
                    source: "/images/cruzeiro.svg"
                }
        }
    },
    time2: function (state, action) {

        return {
            gols: 2,
            escanteios: 0,
            cartoesAmarelos: 0,
            cartoesVermelhos: 0,
            source: "/images/barca.png"
        }
    }

})

const storeConfig = function () {
    return createStore(reducers)
}

export default storeConfig;
