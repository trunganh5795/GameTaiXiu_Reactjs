const initState = {
    dice1: {
        status: 'stop',
        face: 1
    },
    dice2: {
        status: 'stop',
        face: 1
    },
    dice3: {
        status: 'stop',
        face: 1
    },
    score: null,
}

export const diceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DICE_1':
            state.dice1 = { ...state.dice1, face: action.data }
            return { ...state }
        case 'DICE_2':
            state.dice2 = { ...state.dice2, face: action.data }
            return { ...state }
        case 'DICE_3':
            state.dice3 = { ...state.dice3, face: action.data }
            return { ...state }
        case 'PLAY':
            state.dice1 = { ...state.dice1, status: 'play' }
            state.dice2 = { ...state.dice2, status: 'play' }
            state.dice3 = { ...state.dice3, status: 'play' }
            state.score = null;
            return { ...state }
        case 'STOP':
            // state.status = 'stop';
            state[action.data] = { ...state[action.data], status: 'stop' };
            if (state.dice1.status === 'stop' && state.dice2.status === 'stop' && state.dice3.status === 'stop') {
                state.score = state.dice1.face + state.dice2.face + state.dice3.face;
            }
            return { ...state }
        default:
            return state;
    }
}