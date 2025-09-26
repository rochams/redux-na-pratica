import { combineReducers, legacy_createStore as createStore} from 'redux';

const initialStateTeam1 =  {
    gols: 0,
    escanteios: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    source: "/images/cruzeiro.svg"
}
const initialStateTeam2 =  {
    gols: 0,
    escanteios: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    source: "/images/barca.png"
}

const reducers = combineReducers({

    time1: function (state=initialStateTeam1, action) {

        switch(action.type) {
            case 'ADD_GOAL':
                if (action.payload === 1) {
                    return {
                        ...state,
                        gols: state.gols += 1,
                    };
                }
                return state;
            default:
                return state;
        }
    },
    time2: function (state=initialStateTeam2, action) {

        switch(action.type) {
            case 'ADD_GOAL':
                if (action.payload === 2) {
                    return {
                        ...state,
                        gols: state.gols += 1,
                    };
                }
                return state;
            default:
                return state;
        }
    }

})

const storeConfig = function () {
    return createStore(reducers)
}

export default storeConfig;
