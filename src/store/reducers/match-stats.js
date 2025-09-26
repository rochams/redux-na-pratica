export const initialStateTeam1 =  {
    gols: 0,
    escanteios: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    source: "/images/cruzeiro.svg"
}

export const initialStateTeam2 =  {
    gols: 0,
    escanteios: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    source: "/images/barca.png"
}

export const handleTeam1 = (state=initialStateTeam1, action) => {

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
}

export const handleTeam2 = (state=initialStateTeam2, action) => {

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