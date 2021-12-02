const initState = {
    balance: 5000,
    choose: '',
    result: '',
    bet: 0

}

export const playerReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHOOSE':
            state.choose = action.data;
            state.result = '';
            console.log(state.choose)
            return { ...state };
        case 'BET':
            state.bet = action.data;
            return { ...state };
        case 'RESULT':
            console.log("choose: ", state.choose)
            if (action.data >= 4 && action.data <= 10 && state.choose === 'xiu') {
                state.result = 'Chiến Thắng';
                state.balance += state.bet
            } else if (action.data >= 11 && action.data <= 17 && state.choose === 'tai') {
                state.result = 'Chiến Thắng';
                state.balance += state.bet
            } else {
                state.result = 'Thua rồi';
                state.balance -= state.bet
            }
            console.log("Result: ", state.result)
            return { ...state };

        default:
            return state;
    }
}