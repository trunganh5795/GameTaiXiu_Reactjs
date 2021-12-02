const initState = {
    dice1: {
        status: 'play',
        face: 1
    },
    dice2: {
        status: 'play',
        face: 1
    },
    dice3: {
        status: 'play',
        face: 1
    },
    status: 'stop',
    score: null,
}

export const diceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DICE_1':
            state.dice1 = { ...state.dice1, face: action.data }
            console.log("dice 1: ",state.dice1.face)
            return { ...state }
        case 'DICE_2':
            state.dice2 = { ...state.dice2, face: action.data }
            console.log("dice 2: ",state.dice2.face)
            return { ...state }
        case 'DICE_3':
            state.dice3 = { ...state.dice3, face: action.data }
            console.log("dice 3: ",state.dice3.face)
            return { ...state }
        case 'PLAY':
            console.log("play")
            state.status = 'play';
            state.score= null;
            return { ...state }
        case 'STOP':
            state.status = 'stop';
            console.log("Stop: ",state.dice1.face , state.dice2.face , state.dice3.face)
            state.score = state.dice1.face + state.dice2.face + state.dice3.face;
            return { ...state }
        default:
            return state;
    }
}